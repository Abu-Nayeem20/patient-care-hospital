import React, { useEffect, useState } from 'react';
import FeaturedService from '../../Home/FeaturedService/FeaturedService';
import Subscribe from '../../Shared/Subscribe/Subscribe';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./serviceData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='service-top'>
                <h2 className='text-center fw-bolder fs-1 pt-5 text-dark'>Our Services</h2>
            </div>
            <div className='container my-5 py-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                services.map(service => <FeaturedService 
                    key={service.id}
                    service={service}></FeaturedService>)
            }
            </div>
            </div>
            <div className='service-appoint mb-5 text-center'>
                <h2 className='fw-bolder fs-1 text-light'>WANT TO SCHEDULE AN APPOINTMENT?</h2>
                <p>Call us at (+880) 959-595-959 or fill in the appointment form...</p>
                <button className='btn btn-danger'><i className="fas fa-address-book"></i> Appointmenr Form</button>
            </div>
           <div className='container'>
           <Subscribe></Subscribe>
           </div>
        </div>
    );
};

export default Services;