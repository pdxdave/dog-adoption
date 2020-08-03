import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBridge from '../components/header-bridge'

import Hero from '../components/hero'

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  
    <Hero 
        img={data.img.childImageSharp.fluid}
        styleClass="default-hero"
        title1="willow creek"
        title2="dog rescue &"
        title3="adoption"
    />
    <HeaderBridge />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "germ3.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2560, quality: 100) {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`
export default IndexPage
