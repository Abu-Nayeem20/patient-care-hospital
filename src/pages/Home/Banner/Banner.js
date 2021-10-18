import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    
    return (
        <div className='pt-3'>
            <Carousel className='banner-style'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='https://i.ibb.co/SrzybVP/banner-1.jpg'
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/BNtX8X4/banner-2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/qMGJpr1/banner-3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/KsYjx8y/banner-4.jpg"
                alt="Fourth slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;