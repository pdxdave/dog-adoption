import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Title from '../components/title'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import Image from 'gatsby-image'
import Footer from '../components/footer'


const Available = ({data}) => {

    const {allContentfulDogProfile:{nodes:dogs}} = data
    return (
        <Layout>
            <Hero 
                img={data.img.childImageSharp.fluid}
                styleClass="about-hero"
            />
            <Container>
                <Title title="available dogs"/>
                <Row className="py-5">
                    {dogs.map((dog) => {
                        return (
                            <Col key={dog.id} sm={10} md={4} className="available-card">
                                <Card >
                                    <Image fluid={dog.image.fluid}  alt={dog.name} style={{height: "15rem"}}/>
                                    <Card.Body>
                                        <Card.Title className="text-center">{dog.name}</Card.Title>
                                    </Card.Body>
                                    <Link to={`/dogs/${dog.slug}`} style={{textDecoration: 'none'}}>
                                        <Button block variant="outline-primary">More about {dog.name}</Button>
                                    </Link>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
{
    img: file(relativePath: {eq: "germ1.jpg"}) {
        childImageSharp {
        fluid(maxWidth: 2560, quality: 80) {
            ...GatsbyImageSharpFluid
        }
        }
    }
    allContentfulDogProfile {
    nodes {
            id
            name
            slug
            image {
            fluid {
                ...GatsbyContentfulFluid
            }
        }
    }
    }
}
`
export default Available
