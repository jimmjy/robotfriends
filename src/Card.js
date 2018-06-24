import React from 'react';
import './index.css';

const Card = ({ id, name, email, username }) => {
    // we can also destructure the props
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 wide'>
            <img src={`https://robohash.org/${username}?size=200x200`} alt="A Robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;



