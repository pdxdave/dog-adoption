import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

import Hero from '../components/hero'
import {Container, Row, Col, Card} from 'react-bootstrap'
import Title from '../components/title'

import Tom from '../images/tom.jpg'
import Karen from '../images/karen.jpg'
import Beth from '../images/beth.jpg'

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
                    <Row className="py-5">
                        <Col sm={10} md={4}>
                        <Card >
                            <Card.Img variant="top" src={Tom} />
                                <Card.Body>
                                    <Card.Title>Tom Baker</Card.Title>
                                    <Card.Text>
                                    Hi! I look forward to meeting and working with you to help you become a confident, competent dog owner. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={10} md={4}>
                        <Card >
                            <Card.Img variant="top" src={Beth} />
                                <Card.Body>
                                    <Card.Title>Beth McFee</Card.Title>
                                    <Card.Text>
                                    Hello, I am beth. I really enjoy leading the business side of things at Willow Creek.  Each year we are expanding operations, and that leads to more rescued 
                                    dogs and happy dog owners.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={10} md={4}>
                        <Card >
                            <Card.Img variant="top" src={Karen} />
                                <Card.Body>
                                    <Card.Title>Karen Staucey</Card.Title>
                                    <Card.Text>
                                    Hello!  I use my years of experience working with dog shelters across
                                    the US to bring them to you.  Let me know what you're looking. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
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
