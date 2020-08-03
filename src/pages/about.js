import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

import Hero from '../components/hero'
import {Container, Row, Col} from 'react-bootstrap'
import Title from '../components/title'


const About = ({data}) => {
    return (
        <Layout>
            <Hero 
                img={data.img.childImageSharp.fluid}
                styleClass="about-hero"
            />
            <Container>
                <Title title="about us"/>
                <Row>
                    <Col className="text-muted">
                        Willow Creek was founded by three members.  Each member brings a set of skills and experience that make 
                        Willow Creak unique.  For instance, Tom Baker, has trained dogs for over 20 years. You may have seen his 
                        videos on YouTube.  Karen Staucey, has worked with numerous dog adoption agencies across the US and is well 
                        versed on facilitating the transportation of rescue dogs.  And finally, Beth McFee, has a wealth of business 
                        operations experience and knows how to keep things running. Together, along with many great volunteers, they 
                        make up Willow Creek.
                    </Col>
                </Row>
            </Container>

        </Layout>
    )
}

export const query = graphql`
{
  img: file(relativePath: {eq: "rott1.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
export default About
