import React from 'react';

const Card = ({name, img}) => {
    return(
        <div className="card">
            <div>{name}</div>
            <img alt={name} src={img}/>
        </div>
    )
}

export default Card;