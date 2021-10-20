import React from 'react';
import './WhyWe.css'

const WhyWe = () => {
    return (
        <div className='mt-5'>
           <div className='py-5 section-heading'>
           <h2>WHY WE?</h2>
           <p>Personalized patient care is what sets Medicus Medical Center apart.</p>
           </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 whywe-item">
                    <i className="fas fa-user-friends text-center py-5 whywe-icon"></i>
                    <div className="card-body text-light">
                        <h5 className="card-title fs-2 fw-bold">Great staff</h5>
                        <p className="card-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                        <button className='btn btn-warning'>Read more</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 whywe-item">
                    <i className="fas fa-notes-medical text-center py-5"></i>
                    <div className="card-body text-light">
                        <h5 className="card-title fs-2 fw-bold">Affordable</h5>
                        <p className="card-text">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance to maximise offline indicators.</p>
                        <button className='btn btn-warning'>Read more</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 whywe-item">
                    <i className="fas fa-clinic-medical text-center py-5"></i>
                    <div className="card-body text-light">
                        <h5 className="card-title fs-2 fw-bold">Great facilities</h5>
                        <p className="card-text">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
                        <button className='btn btn-warning'>Read more</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default WhyWe;