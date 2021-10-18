import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/patient-care-logo.png'

const Footer = () => {
    return (
        <div>
            <div className='container'>
            <div className='row pb-5'>
            <div className='col-md-4 col-sm-6 col-12'>
                    <div>
                    <h4 className='fw-bold py-4'>Reach Us</h4>
                    <p><i className="fas fa-phone-square-alt fs-2 text-primary"></i> +880123456</p>
                    <p><i className="fas fa-envelope fs-2 text-primary"></i> yourmail@gmail.com</p>
                    <p><i className="fas fa-map-marker-alt fs-2 text-primary"></i> Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12 text-center'>
                    <div>
                    <Link to='/home'><img className='w-50 pb-3' src={logo} alt="" /></Link>
                    <p>Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world class care. </p>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='text-center'>
                    <h4 className='fw-bold py-4'>Quick Links</h4>
                    <p><Link to='/services'>Our all services</Link></p>
                    <p><Link to='/departments'>all departments</Link></p>
                    <p><Link to='/contact'>Contact us</Link></p>
                    <p><Link to='/signin'>New User ? Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-dark'>
        <div className='container'>
        <div className='row pt-3'>
            <div className='col-6 text-light'>
                <p><i className="fas fa-heart text-danger"></i> Developer Nayeem</p>
            </div>
            <div className='col-6 text-light text-end'>
            <i className="fab fa-facebook mx-2 fs-4"></i>
            <i className="fab fa-twitter mx-2 fs-4"></i>
            <i className="fab fa-linkedin mx-2 fs-4"></i>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;