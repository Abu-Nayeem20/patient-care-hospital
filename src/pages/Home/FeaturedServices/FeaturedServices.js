import React, { useEffect, useState } from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';

const FeaturedServices = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('/serviceData.json')
        .then( res => res.json())
        .then(data => setServices(data))
    }, [])

    // const slicedService = services.slice(0, 3);

    return (
        <div>
            <div className='text-center py-5'>
            <h2 className='fw-bold text-dark fs-1'>FEATURED SERVICES</h2>
            <p>These are our Special Services</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                services.map(service => <FeaturedService 
                    key={service.id}
                    service={service}></FeaturedService>)
            }
            </div>
        </div>
    );
};

export default FeaturedServices;