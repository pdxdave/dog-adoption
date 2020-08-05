import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Maine from '../images/maine2.jpg'
import Title from '../components/title'

const WillowCreek = () => {
    return (
        <section>
            <Container className="py-5">
                <Title title="willow creek" />
                <Row >
                    <Col xs={12} sm={10} md={6} className="mx-auto">
                        <img src={Maine} alt="maine" className="willow-image" />
                    </Col>
                    <Col xs={12} sm={10} md={6} className="mx-auto" >
                        <p className="willow-text text-muted" 
                            data-sal="slide-up" 
                            data-sal-delay="800" 
                            data-sal-easing="ease">Nestled in the mountains of Maine, between Arch Point Lookout and Sandy Rock Cove is Willow Creek.  The home to <em>Willow Creek Dog Rescue & Adoption</em>.  We started 11 years ago with the goal of rescuing at risk dogs in high kill shelters, strays and dogs that owners could no longer care for.  We find them new homes. Along the way we educate the public about dog ownership and provide the tools and training to better prepare themselves to be good dog owners.  All of our dogs are healthy, up-to-date with their vaccinations, and microchiped.  </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WillowCreek
