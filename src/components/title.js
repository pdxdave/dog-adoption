import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Title = (props) => {
    return (
        <Row className="py-5 ">
            <Col sm={10} md={8} className="mx-auto text-center">
                <h1>{props.title}</h1>
            </Col>
        </Row>
    )
}

export default Title
