import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {FaWalking, FaUserShield, FaUserFriends} from 'react-icons/fa'

const HeaderBridge = () => {
    return (
        <section className="header_bridge">
            <Container>
                <Row className="py-5 mx-auto">
                    <Col xs={11} md={10} lg={4} className="d-flex">
                        <div className="pr-2">
                            <FaWalking className="fa_icon"/>
                        </div>
                        <div>     
                            <p>Dogs make great exercise partners!  They're always ready to go for a walk around the block, a jog, or a hike.</p>
                        </div>
                    </Col>
                    <Col xs={11} md={10} lg={4} className="d-flex header_bridge_col">
                        <div className="pr-2">
                            <FaUserShield className="fa_icon"/>
                        </div>
                        <div>     
                            <p>Dogs are great security guards. They love to protect their owners. Feel more secure about your surroundings.</p>
                        </div>
                    </Col>
                    <Col xs={11} md={10} lg={4} className="d-flex ">
                    <div className="pr-2">
                            <FaUserFriends className="fa_icon"/>
                        </div>
                        <div>     
                            <p>Dogs are great friends. They love to hang out and do all the things you like to do. Most even like movies and popcorn.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeaderBridge
