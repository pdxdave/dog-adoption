import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import {Container, Form, Button} from 'react-bootstrap'
import Title from '../components/title'
import Footer from '../components/footer'

const Contact = ({data}) => {


    return (
        <Layout>
            <Hero 
                img={data.img.childImageSharp.fluid}
                styleClass="about-hero"
            />
            <Container className="pb-5">
                <Title title="Contact" />
                <Form action="https://formspree.io/spinout11@hotmail.com" method="post">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Message"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
{
    img: file(relativePath: {eq: "contact.jpg"}) {
        childImageSharp {
        fluid(maxWidth: 2560, quality: 100) {
            ...GatsbyImageSharpFluid
        }
        }
    }
}
`

export default Contact
