import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function AboutPage() {
  return (
    <>
      <Helmet title={`About Me | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero title="About Me" type="page" />
        
        <div className="container">
          <section className="about-section">
            <h2>Hi, I'm Debrup Paul 👋</h2>
            <p>
              I'm an AI Engineer passionate about developing intelligent systems and solutions 
              that make a real impact. With a strong foundation in machine learning, deep learning, 
              and software engineering, I specialize in building AI-powered applications that solve 
              complex problems.
            </p>

            <h3>What I Do</h3>
            <ul>
              <li>Design and implement machine learning models and AI systems</li>
              <li>Develop end-to-end ML pipelines and deploy them to production</li>
              <li>Work with natural language processing and computer vision applications</li>
              <li>Contribute to open-source AI projects</li>
              <li>Write technical articles and tutorials about AI and ML</li>
            </ul>

            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>AI & ML</h4>
                <ul>
                  <li>PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Scikit-learn</li>
                  <li>Hugging Face</li>
                  <li>OpenAI</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Programming</h4>
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools & Platforms</h4>
                <ul>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>AWS</li>
                  <li>MLflow</li>
                  <li>FastAPI</li>
                </ul>
              </div>
            </div>

            <h3>Experience & Education</h3>
            <p>
              I have experience working on various AI projects, from research to production deployment. 
              My work involves developing custom AI solutions, optimizing ML models, and ensuring 
              seamless integration with existing systems.
            </p>

            <h3>Get in Touch</h3>
            <p>
              I'm always interested in collaborating on interesting AI projects or discussing 
              new opportunities. Feel free to reach out to me through:
            </p>
            <ul className="contact-links">
              <li>
                <a href="https://github.com/debrupf2946" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/debrup-paul-599158227/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:f20212946@goa.bits-pilani.ac.in">
                  Email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </PageLayout>
    </>
  )
}

AboutPage.Layout = Layout 