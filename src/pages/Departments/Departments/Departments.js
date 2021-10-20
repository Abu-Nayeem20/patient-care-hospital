import React, { useEffect, useState } from 'react';
import FeaturedServices from '../../Home/FeaturedServices/FeaturedServices';
import Department from './Department';
import './Departments.css'

const Departments = () => {
    const [departments, setDepartments] = useState([]);

    useEffect( () => {
        fetch('./serviceData.json')
        .then(res => res.json())
        .then(data => setDepartments(data))
    }, [])

    return (
        <div>
            <div className='top-bg-img'>
                <h2><i className="fas fa-university"></i> Our All Departments</h2>
                </div>
                <div className='container py-5'>
                {
                    departments.map( department => <Department
                        key={department.id}
                         dp={department}></Department>)
                }
                <div className='py-5 mt-5'>
                <FeaturedServices></FeaturedServices>
                </div>
            </div>
        </div>
    );
};

export default Departments;