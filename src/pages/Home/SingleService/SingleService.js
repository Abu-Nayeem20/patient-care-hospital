import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleService.css'

const SingleService = () => {
    const {serviceId} = useParams();

    const [service, setService] = useState([]);

    useEffect( () =>{
        fetch('/serviceData.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    const singleService = service.find(sr => sr.id === serviceId);
    // console.log(singleService)

    return (
        <div>
            <div className='top-bg-img'>
                <h2><i className="fas fa-info-circle"></i> Details information about our service</h2>
            </div>
            <div className='container text-center'>
            <h2 className='py-5 fw-bold'>{singleService?.title}</h2>
             <img className='img-fluid' src={singleService?.img} alt="" />
             <p className='text-start py-5'>{singleService?.desc}</p>
            </div>
            <div className='service-appoint mb-5 text-center'>
                <h2 className='fw-bolder fs-1 text-light'>WANT TO SCHEDULE AN APPOINTMENT?</h2>
                <p>Call us at (+880) 959-595-959 or fill in the appointment form...</p>
                <button className='btn btn-danger'><i className="fas fa-address-book"></i> Appointmenr Form</button>
            </div>
        </div>
    );
};

export default SingleService;