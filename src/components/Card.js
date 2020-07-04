import React from "react";

const Card = (props) => {
    return (
        <div key={props.id}>
        <h2>{props.name}</h2>
        <h4>{props.price}</h4>
        <p>{props.descriptions}</p>
        </div>
    );
};

export default Card;