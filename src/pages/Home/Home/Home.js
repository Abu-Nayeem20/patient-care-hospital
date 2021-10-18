import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Welcome from '../Welcome/Welcome';
import WhyWe from '../WhyWe/WhyWe';


const Home = () => {
    return (
        <div className='mb-5'>
            <Banner></Banner>
            <div className='container py-5'>
                <Welcome></Welcome>
                <FeaturedServices></FeaturedServices>
                <WhyWe></WhyWe>
            </div>
        </div>
    );
};

export default Home;