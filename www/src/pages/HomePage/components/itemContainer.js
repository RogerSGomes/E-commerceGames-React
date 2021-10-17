import React from 'react';
import "./itemContainer.css";

function ItemContainer(props) {
    return (
        <div className="item_container" style={{ display: `${props.isActive ? 'block' : 'none'}` }}>
            <div className="item_body">
                <p className="item_title">{props.title}</p>
                <p className="item_subtitle">{props.subtitle}</p>
                <p className="item_description">{props.description}</p>
            </div>
            <div className="item_footer">
                <button className="item_button" type="button">Comprar Agora</button>
            </div>
        </div>
    );
}

export default ItemContainer;