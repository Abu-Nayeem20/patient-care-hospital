import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Contact.css'

const Contact = () => {
    const {user} = useAuth();
    return (
        <div>
            <div className='contact-bg-img'>
                <h2><i className="fas fa-address-card"></i> Contact us</h2>
            </div>
           <div className='container py-5'>
                <div className='contact-text'>
                <h2>Get In Touch</h2>
                <p>Quickly aggregate B2B users and worldwide potentialities. Progressively plagiarize resource-leveling e-commerce through resource-leveling core competencies.</p>
                </div>
                <div className='contact-form py-5'>
                <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={user?.displayName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" value={user?.email} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Comments</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
                </Form>
                </div>
           </div>
        </div>
    );
};

export default Contact;