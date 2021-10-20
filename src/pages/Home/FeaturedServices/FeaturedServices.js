import React, { useEffect, useState } from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';

const FeaturedServices = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('/serviceData.json')
        .then( res => res.json())
        .then(data => setServices(data))
    }, [])

    const slicedService = services.slice(0, 6);

    return (
        <div>
            <div className='py-5 section-heading'>
            <h2>FEATURED SERVICES</h2>
            <p>Personalized patient care is what sets Medicus Medical Center apart.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                slicedService.map(service => <FeaturedService 
                    key={service.id}
                    service={service}></FeaturedService>)
            }
            </div>
        </div>
    );
};

export default FeaturedServices;