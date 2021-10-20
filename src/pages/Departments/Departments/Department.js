import React from 'react';

const Department = (props) => {
   const {title, img, desc} = props.dp;
    return (
        <div>
            <div className="card mb-3 dept-card">
            <div className="row g-0 bg-success rounded">
                <div className="col-md-5 overflow-hidden">
                <img src={img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title fw-bold text-light fs-2">{title} Department</h5>
                    <p className="card-text text-light">{desc}</p>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Department;