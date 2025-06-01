import React from 'react'
import { Layout } from '../../components/Layout'
import { SEO } from '../../components/SEO'
import { PageLayout } from '../../components/PageLayout'

const IVRSystem = () => {
  return (
    <>
      <SEO title="AI-driven IVR System" />
      <PageLayout>
        <div className="container">
          <h1>AI-driven IVR System</h1>
          <p className="subtitle">Real-time AI-driven IVR and Voice Agent solution for ASEAN region</p>

          <h2>Project Overview</h2>
          <p>
            Developed and deployed a real-time AI-driven IVR (Interactive Voice Response) and Voice Agent solution 
            tailored for the ASEAN region over Twilio.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Implemented, Deployed, and scaled the Faster Whisper Transcriber Service using WebSockets</li>
            <li>Migrated from Azure Speech with reduced latency and improved WER</li>
            <li>Implemented server-side buffering and end-of-speech detection</li>
            <li>Integrated real-time noise reduction to enhance transcription accuracy</li>
          </ul>

          <h2>Technologies Used</h2>
          <ul>
            <li>WebSockets</li>
            <li>FasterWhisper</li>
            <li>Ray</li>
            <li>AWS EKS</li>
            <li>Docker</li>
            <li>AWS Bedrock</li>
            <li>SileroVAD</li>
            <li>Locust</li>
            <li>Noise-Reduce</li>
            <li>Pedal-Board</li>
          </ul>
        </div>
      </PageLayout>
    </>
  )
}

IVRSystem.Layout = Layout

export default IVRSystem 