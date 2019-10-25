import React from 'react';

const Smurf = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default Smurf;