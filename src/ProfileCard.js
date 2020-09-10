import React from 'react';
import './ProfileCard.css'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <Container>
                <Row>
                    <Col>
                        <Card.Img className="embed-responsive-1by1" variant="top" src={process.env.PUBLIC_URL + '/images/gambar1.jpg'}/>
                        <Card>
                            <Card.Body>
                                <Card.Title>Rivers</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="secondary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card.Img className="embed-responsive-1by1" variant="top" src={process.env.PUBLIC_URL + '/images/gambar2.jpg'} />
                        <Card>
                            <Card.Body>
                                <Card.Title>Aurora</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="secondary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card.Img className="embed-responsive-1by1" variant="top" src={process.env.PUBLIC_URL + '/images/gambar3.jpg'} />
                        <Card>
                            <Card.Body>
                                <Card.Title>Mountain</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="secondary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ProfileCard
