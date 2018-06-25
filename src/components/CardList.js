import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((data) => {
                    return (
                        <Card 
                        username={data.username} 
                        name={data.name} 
                        key={data.id} 
                        email={data.email} 
                        />
                    );
                })
            }
        </div>
    )
};

export default CardList;
