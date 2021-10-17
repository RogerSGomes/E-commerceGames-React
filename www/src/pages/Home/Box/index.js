import React from 'react';
import "./index.css";

export default function Box(props) {
    return (
        <div className="boxContainer" style={{ display: `${props.isActive ? 'block' : 'none'}` }}>
            <div className="boxBody">
                <p className="boxTitle">{props.title}</p>
                <p className="boxSubtitle">{props.subtitle}</p>
                <p className="boxDescription">{props.description}</p>
            </div>
            <div className="boxFooter">
                <button className="boxButton" type="button">Comprar Agora</button>
            </div>
        </div>
    );
}