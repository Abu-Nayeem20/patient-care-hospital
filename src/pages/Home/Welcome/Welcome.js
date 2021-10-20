import React from 'react';
import './Welcome.css'

const Welcome = () => {
    return (
        <div className='py-5'>
            <div className='pb-5 section-heading'>
            <h2>WELCOME TO PATIENT CARE</h2>
            <p>We' ve built a long standing relationship based on trust</p>
            </div>
            <div className="card">
            <div className="row g-0 welcome-content">
                <div className="col-md-4 overflow-hidden">
                <img src="https://i.ibb.co/SrzybVP/banner-1.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text">Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world className care. Expert physician specialists and caring clinical staff provide you with an exceptional health care experience. Personalized patient care is what sets Medicus Medical Center apart.</p>
                    <h2 className='fw-bold py-1 text-info'>MODERN MEDICAL FACILITIES</h2>
                    <p>Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world className care. Expert physician specialists and caring clinical staff provide you with an exceptional health care experience.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Welcome;