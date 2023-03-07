// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>Hi there! My name is John Jefferies! I'm the proud creator of this site, which I built with Gatsby.</p>
        <p>I am beginning my journey into the world of web development to increase my knowledge about the field.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me"/>

// Step 3: Export your component
export default AboutPage