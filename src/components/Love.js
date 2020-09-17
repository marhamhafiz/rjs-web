import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Love() {
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="yourname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name..." />
                </Form.Group>

                <Form.Group controlId="yourhobby">
                    <Form.Label>Hobbies</Form.Label>
                    <Form.Control type="text" placeholder="Your Hobby..." />
                </Form.Group>

                <Form.Group controlId="abouthobby">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="About your hobbies..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Love