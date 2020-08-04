import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Title from '../components/title'
import {Container, Row, Col} from 'react-bootstrap'

const Available = ({data}) => {
    return (
        <Layout>
            <Hero 
                img={data.img.childImageSharp.fluid}
                styleClass="about-hero"
            />
            <Container>
                <Title title="available dogs"/>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
            
        </Layout>
    )
}

export const query = graphql`
{
    img: file(relativePath: {eq: "germ1.jpg"}) {
        childImageSharp {
        fluid(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpFluid
        }
        }
    }
}
`
export default Available
