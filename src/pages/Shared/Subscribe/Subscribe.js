import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
            <div className='subscribe-content'>
            <div className='subscribe-inner-content'>
            <p>Latest notifications</p>
            <h2>We have some <br /> <span>Good news</span></h2>
            <p>Sign up for Medicare newsletter to receive all the new offers and discounts from Medicare clinic. Discounts are only valid four our newsletter subscribers.</p>
            <div className="input-group my-5">
            <input type="text" className="form-control py-3" placeholder="Type in your email address"/>
            <button className="btn btn-primary" type="button" >Subscribe</button>
            </div>
            </div>
        </div>
    );
};

export default Subscribe;