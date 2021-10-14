import React from 'react';
import "./productCard.css";

function Xbox() {
    return <div className="platform_item"><p>XB</p></div>;
}

function PS() {
    return <div className="platform_item"><p>PS</p></div>;
}

function PC() {
    return <div className="platform_item"><p>PC</p></div>;
}

function Switch() {
    return <div className="platform_item"><p>SW</p></div>;
}

function Android() {
    return <div className="platform_item"><p>AD</p></div>;
}

function ProductCard(props) {
    const isXbox = props.isXbox;
    const isPS = props.isPS;
    const isPC = props.isPC;
    const isSwitch = props.isSwitch;
    const isAndroid = props.isAndroid;

    return (
        <div className="product_card">
            <div className="card_header">
                <div className="header_img" style={{ backgroundImage: `url(${props.img})` }}></div>
                <div className="header_title">{props.name}</div>
            </div>
            <div className="card_body">
                <p className="body_price">{props.price}</p>
                <p className="body_title">Selecione uma plataforma:</p>
                <div className="body_platforms">
                    {isXbox ? <Xbox /> : ''}
                    {isPS ? <PS /> : ''}
                    {isPC ? <PC /> : ''}
                    {isSwitch ? <Switch /> : ''}
                    {isAndroid ? <Android /> : ''}
                </div>
            </div>
            <div className="card_footer">
                <button className="footer_button" type="submit">Adicionar ao carrinho</button>
            </div>
        </div >
    );
}

export default ProductCard;