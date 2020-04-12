import React from 'react';
import '../ServicesCards/ServicesCards.css';
export default function ServicesCards(props) {
    return (
        <div className="Card">
            <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        </div>
    )
}
