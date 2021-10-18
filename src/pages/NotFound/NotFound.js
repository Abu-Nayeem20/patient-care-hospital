import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='img-fluid' src="https://i.ibb.co/BsGq2QN/3828537.png" alt="" />
            <Link to='/home'>
            <button className='btn btn-danger my-5'>Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;