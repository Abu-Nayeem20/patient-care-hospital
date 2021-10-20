import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignIn.css'

const SignIn = () => {

    const {signInUsingGoogle, haveAccountToggle, haveAccount, handleNameChange, handleEmailChange, handlePasswordChange, handlePhotoChange, handleSubmitButton, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url);
        })
    }

    // some editing
    const userSubmitBtn = () => {
        handleSubmitButton()
        .then(result =>{
            history.push(redirect_url);
        })
    }

    //--------

    return (
        <div className='container py-5'>
            <Form.Group className="mb-3 fw-bold fs-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" onChange={haveAccountToggle} label="Already have an account ?" />
            </Form.Group>
            {haveAccount ?
                <h2 className='fw-bold py-3'>Sign In</h2>
               :  <h2 className='fw-bold py-3'>Register</h2>
            }
            <div className='row'>
                <div className='col-md-6'>
                <Form className='signin-form bg-primary p-5 rounded'>
                    <p className='text-danger'>{error}</p>
                <div>
                    { !haveAccount &&
                        <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onBlur={handleNameChange} placeholder="Enter Name" />
                </Form.Group>
                }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" required />
                </Form.Group>
                  
                {!haveAccount &&
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Profile Photo</Form.Label>
                    <Form.Control type="text" onBlur={handlePhotoChange} placeholder="Profile Photo url" />
                </Form.Group>
                }
                </div>
                
                
                <Button variant="danger" onClick={handleSubmitButton} type="submit">
                    {haveAccount ? 'Sign In' : 'Register'}
                </Button>
                </Form>
                </div>
                <div className='col-md-6'>
                    <div className='w-50 mx-auto'>
                    <img className='img-fluid' src="https://i.ibb.co/G0Z7NQW/20944201.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='text-center pb-5 mt-5'>
                <h4 className='fw-bold pb-3'>Or Sign In Using</h4>
                <p className='google-btn' onClick={handleGoogleSignIn}><i className="fab fa-google"></i></p>
            </div>
        </div>
    );
};

export default SignIn;




// {haveAccount ? 
//     <div>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email</Form.Label>
//     <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" required />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" required />
// </Form.Group> 
//     </div>:
//     <div>
//         <Form.Group className="mb-3" controlId="">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" onBlur={handleNameChange} placeholder="Enter Name" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" required />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" required />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="">
//         <Form.Label>Profile Photo</Form.Label>
//         <Form.Control type="text" onBlur={handlePhotoChange} placeholder="Profile Photo url" />
//     </Form.Group>
//     </div>
//     }