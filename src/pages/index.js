import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function Index({ data }) {
  const latestNotes = data.latestNotes.edges
  const latestArticles = data.latestArticles.edges
  const highlights = data.highlights.edges
  const notes = useMemo(() => getSimplifiedPosts(latestNotes), [latestNotes])

  const articles = useMemo(
    () => getSimplifiedPosts(latestArticles),
    [latestArticles]
  )
  const simplifiedHighlights = useMemo(
    () => getSimplifiedPosts(highlights, { thumbnails: true }),
    [highlights]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <PageLayout>
        <Hero title={
          <div className="animated-title">
            <span className="wave">👋</span>
            <span className="typing-text">Hey, I'm Debrup!</span>
          </div>
        } type="index">
          <div className="hero-wrapper">
            <div className="hero-content">
              <p className="hero-description fade-in-1">
                I'm an AI Engineer with experience in developing and deploying AI-driven solutions. I've contributed to open-source projects and have a strong background in machine learning and data science.
              </p>
              <p className="hero-description fade-in-2">
                I enjoy working on innovative projects, exploring new technologies, and continuously learning to enhance my skills.
              </p>
            </div>
            <div className="hero-image-container">
              <img src="/images/debrup.png" className="hero-image" alt="Debrup Paul" />
            </div>
          </div>
        </Hero>

        <section className="section-index experience-section">
          <Heading
            title="Professional Experience"
            description="My journey in AI and Software Development"
          />
          
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-header">
                <h3>AI Engineer</h3>
                <div className="experience-meta">
                  <span className="company">OneByZero</span>
                  <span className="duration">February 2025</span>
                </div>
              </div>
              <ul className="experience-details">
                <li>Developed and deployed a real-time AI-driven IVR (Interactive Voice Response) and Voice Agent solution tailored for the ASEAN region over Twilio.</li>
                <li>Implemented, Deployed, and scaled the Faster Whisper Transcriber Service using WebSockets, migrating from Azure Speech with reduced latency and improved WER through server-side buffering and end-of-speech detection.</li>
                <li>Integrated real-time noise reduction to enhance transcription accuracy and system performance.</li>
              </ul>
              <div className="skills-tags">
                <span>WebSockets</span>
                <span>FasterWhisper</span>
                <span>Ray</span>
                <span>AWS EKS</span>
                <span>Docker</span>
                <span>AWS Bedrock</span>
                <span>SileroVAD</span>
                <span>Locust</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Google Summer of Code Contributor</h3>
                <div className="experience-meta">
                  <span className="company">C2SI, Score Labs</span>
                  <span className="duration">May 2024 - July 2024</span>
                </div>
              </div>
              <ul className="experience-details">
                <li>Project aims to built Knowledge Graph over Text and Code Modalities over Documentations and perform retrieval for code generation and understanding.</li>
                <li>Built 4 modules Knowledge Graph builder, Retriever, Experiments, Evaluator handling complete KG-RAG workflow.</li>
                <li>Optimized retriever LLM's using 8,4 bit Quantization, PEFT methods served in Ollama for local usage.</li>
              </ul>
              <div className="skills-tags">
                <span>HuggingFace</span>
                <span>PyTorch</span>
                <span>Llama-Index</span>
                <span>Neo4j</span>
                <span>LangChain</span>
                <span>Ollama</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>NLP Research Intern</h3>
                <div className="experience-meta">
                  <span className="company">IIIT-Hyderabad, LTRC</span>
                  <span className="duration">2024</span>
                </div>
              </div>
              <ul className="experience-details">
                <li>Utilized Knowledge graphs and transformer models for natural language generation from USR. Built an instance based dependency parser for generating Knowledge Graphs.</li>
                <li>Mentored Sanskrit Scholars on NLP tasks and implementations.</li>
              </ul>
              <div className="skills-tags">
                <span>Keras 3.0</span>
                <span>NLP</span>
                <span>HuggingFace</span>
                <span>Transformers</span>
                <span>PyTorch</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Data Science Intern</h3>
                <div className="experience-meta">
                  <span className="company">Asanify Technologies</span>
                  <span className="duration">May 2023 - July 2023</span>
                </div>
              </div>
              <ul className="experience-details">
                <li>Developed GlobalClients database and generated leads through Web Scraping, achieving 15% growth in foreign clients, built visualizations on scraped data using Tableau.</li>
                <li>Designed and implemented an end-to-end Text-to-SQL pipeline, significantly reducing analysts' workload and enhancing efficiency by automating query generation.</li>
              </ul>
              <div className="skills-tags">
                <span>Scrappy</span>
                <span>Auto-Scraper</span>
                <span>Regex</span>
                <span>llama-index</span>
                <span>OpenAI</span>
                <span>PineCone</span>
                <span>Tableau</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-index education-section">
          <Heading
            title="Education"
            description="Academic Background and Achievements"
          />
          
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-header">
                <h3>Birla Institute of Technology and Science, Pilani</h3>
                <div className="education-meta">
                  <div className="education-primary-info">
                    <span className="degree">Integrated BE in Mechanical Engineering & MSc in Mathematics</span>
                    <div className="education-timeline-info">
                      <span className="duration">Apr 2021 - May 2026</span>
                      <span className="dot-separator">•</span>
                      <span className="location">Goa, India</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education-content">
                <div className="coursework">
                  <h4>Relevant Coursework</h4>
                  <div className="course-tags">
                    <span>Computer Programming</span>
                    <span>Numerical Methods</span>
                    <span>Foundation of Data Science</span>
                  </div>
                </div>
                <div className="coursework">
                  <h4>Advanced Studies</h4>
                  <div className="course-tags">
                    <span>Operation Research</span>
                    <span>Statistical Inference</span>
                    <span>Linear Algebra</span>
                    <span>Probability and Statistics</span>
                    <span>AI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h3>Delhi Public School Ruby Park</h3>
                <div className="education-meta">
                  <div className="education-primary-info">
                    <span className="degree">Higher Secondary (CBSE)</span>
                    <div className="education-timeline-info">
                      <span className="duration">Apr 2008 - Apr 2021</span>
                      <span className="dot-separator">•</span>
                      <span className="location">Kolkata, India</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education-content">
                <div className="achievements">
                  <div className="achievement-item">
                    <span className="achievement-label">Class 12 (PCM):</span>
                    <span className="achievement-score">95%</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-label">Class 10 (AISSCE):</span>
                    <span className="achievement-score">91%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="section-index connect-section">
          <Heading
            title="Connect"
            description="Let's get in touch!"
          />
          <div className="connect-container">
            <div className="connect-grid">
              <a href="https://github.com/debruppaul" target="_blank" rel="noopener noreferrer" className="connect-item">
                <div className="connect-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </div>
                <span className="connect-label">GitHub</span>
              </a>
              
              <a href="https://linkedin.com/in/debruppaul" target="_blank" rel="noopener noreferrer" className="connect-item">
                <div className="connect-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="connect-label">LinkedIn</span>
              </a>

              <a href="mailto:f20212946@goa.bits-pilani.ac.in" className="connect-item">
                <div className="connect-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="connect-label">Email</span>
              </a>

              <a href="https://twitter.com/debruppaul" target="_blank" rel="noopener noreferrer" className="connect-item">
                <div className="connect-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span className="connect-label">Twitter</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section-index">
          <Heading
            title="Notes"
            slug="/notes"
            buttonText="See All"
            description="Personal notes about life, music, projects, and everything else."
          />
          <Posts data={notes} newspaper />
        </section>

        <section className="section-index">
          <Heading
            title="Articles"
            slug="/blog"
            buttonText="See All"
            description="Guides, references, and tutorials."
          />
          <Posts data={articles} newspaper />
        </section>

        <section className="section-index">
          <Heading
            title="Deep Dives"
            slug="/topics"
            buttonText="All Topics"
            description="Long-form tutorials on a variety of development topics."
          />
          <div className="cards">
            {simplifiedHighlights.map((post) => {
              return (
                <Link
                  to={post.slug}
                  className="card card-highlight"
                  key={`popular-${post.slug}`}
                >
                  {post.thumbnail && (
                    <GatsbyImage image={post.thumbnail} alt="Thumbnail" />
                  )}
                  <div>{post.title}</div>
                </Link>
              )
            })}
          </div>
        </section>

        <section>
          <Heading
            title="Projects"
            slug="/projects"
            buttonText="All Projects"
            description="Open-source projects I've worked on over the years."
          />

          <div className="cards">
            {projectsList
              .filter((project) => project.highlight)
              .map((project) => {
                return (
                  <div className="card" key={`hightlight-${project.slug}`}>
                    <time>{project.date}</time>
                    <a
                      href={`https://github.com/taniarascia/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                    <div className="card-links">
                      {project.writeup && (
                        <Link className="button small" to={project.writeup}>
                          Article
                        </Link>
                      )}
                      <a
                        className="button small"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>
      </PageLayout>
    </>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latestNotes: allMarkdownRemark(
      limit: 3
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          template: { eq: "post" }
          categories: { eq: "Personal" }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    latestArticles: allMarkdownRemark(
      limit: 3
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          template: { eq: "post" }
          categories: { eq: "Technical" }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    highlights: allMarkdownRemark(
      limit: 12
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 40, height: 40, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
