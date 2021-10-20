import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedService.css'

const FeaturedService = (props) => {
   const {id, title, img, desc}= props.service;
   const shortDesc = desc.slice(0, 118);
    return (
        <div>
            <div className="col">
                <div className="card h-100 featured-item">
                <div className='overflow-hidden'>
                <img src={img} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body text-light">
                    <h5 className="card-title fs-4 py-3 fw-bold">{title}</h5>
                    <p className="card-text">{shortDesc}</p>
                    <Link to={`/services/${id}`}>
                    <button className='btn btn-danger'>Read more</button>
                    </Link>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default FeaturedService;