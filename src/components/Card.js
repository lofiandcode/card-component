import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div key={props.id} className="card">
        <h2>{props.name}</h2>
        <h4>${props.price}</h4>
        <p>{props.descriptions}</p>
        </div>
    );
};

export default Card;