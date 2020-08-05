import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import {Container, Form, Button} from 'react-bootstrap'
import Title from '../components/title'

const Contact = ({data}) => {
    return (
        <Layout>
            <Hero 
                img={data.img.childImageSharp.fluid}
                styleClass="about-hero"
            />
            <Container>
                <Title title="Contact" />
                <Form action="https://formspree.io/spinout11@hotmail.com" method="post">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
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

export default Contact
