import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import {Container, Row, Col} from 'react-bootstrap'

export default function Hero ({img, styleClass, title1, title2, title3}) {
    return (
        <BackgroundImage
            className={styleClass}
            fluid={img}
        >
            {/* <div className="hero_content">
                <h1>{title1}</h1>
                <h1>{title2}</h1>
                <h1>{title3}</h1>
            </div> */}

            <Container className="container">
                <Row className="row ">
                    <Col className="col hero_content">
                        <h1>{title1}</h1>
                        <h1>{title2}</h1>
                        <h1>{title3}</h1>
                    </Col>
                    <Col className="col"></Col>
                </Row>
            </Container>

        </BackgroundImage>
    )
}

