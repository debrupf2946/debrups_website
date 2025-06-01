import React from 'react'
import { Layout } from '../../components/Layout'
import { SEO } from '../../components/SEO'
import { PageLayout } from '../../components/PageLayout'

const MLDataScience = () => {
  return (
    <>
      <SEO title="ML & Data Science Skills" />
      <PageLayout>
        <div className="container">
          <h1>Machine Learning & Data Science</h1>
          <p className="subtitle">Core skills and expertise in ML and Data Science</p>

          <h2>Programming Languages</h2>
          <ul>
            <li>Python</li>
            <li>PyTorch</li>
            <li>HuggingFace</li>
            <li>Keras</li>
            <li>Scikit-Learn</li>
            <li>NLTK</li>
            <li>C++</li>
            <li>Shell</li>
          </ul>

          <h2>Areas of Expertise</h2>
          <ul>
            <li>Natural Language Processing</li>
            <li>Deep Learning</li>
            <li>Speech Recognition</li>
            <li>Knowledge Graphs</li>
            <li>Transformer Models</li>
            <li>Model Optimization</li>
          </ul>

          <h2>Projects & Applications</h2>
          <ul>
            <li>Real-time Speech Recognition Systems</li>
            <li>Text-to-SQL Generation</li>
            <li>Knowledge Graph Construction</li>
            <li>Hate Speech Detection</li>
          </ul>
        </div>
      </PageLayout>
    </>
  )
}

MLDataScience.Layout = Layout

export default MLDataScience 