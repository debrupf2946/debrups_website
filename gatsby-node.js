const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Helpers
function slugify(str) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  )
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
      template: String
      draft: Boolean
      slug: String
      category: String
      categories: [String]
      tags: [String]
      description: String
      thumbnail: File @fileByRelativePath
      comments_off: Boolean
    }

    type Fields {
      slug: String
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = node.frontmatter.slug || createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: value.startsWith('/') ? value : `/${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
              title
              tags
              category
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create blog posts pages
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/${post.node.frontmatter.template}.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create tag pages
  const tags = []
  posts.forEach(post => {
    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
    }
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.toLowerCase().replace(/ /g, '-')}/`,
      component: path.resolve('./src/templates/tag.js'),
      context: {
        tag,
      },
    })
  })

  // Create category pages
  const categories = []
  posts.forEach(post => {
    if (post.node.frontmatter.category) {
      const category = post.node.frontmatter.category
      if (!categories.includes(category)) {
        categories.push(category)
      }
    }
  })

  categories.forEach(category => {
    createPage({
      path: `/categories/${category.toLowerCase().replace(/ /g, '-')}/`,
      component: path.resolve('./src/templates/category.js'),
      context: {
        category,
      },
    })
  })
}
