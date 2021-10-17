import React from 'react';
import "./index.css";

function Xbox() {
    return <div className="platformItem"><p>XB</p></div>;
}

function PS() {
    return <div className="platformItem"><p>PS</p></div>;
}

function PC() {
    return <div className="platformItem"><p>PC</p></div>;
}

function Switch() {
    return <div className="platformItem"><p>SW</p></div>;
}

function Android() {
    return <div className="platformItem"><p>AD</p></div>;
}

export default function Product(props) {
    const isXbox = props.isXbox;
    const isPS = props.isPS;
    const isPC = props.isPC;
    const isSwitch = props.isSwitch;
    const isAndroid = props.isAndroid;

    return (
        <div className="productCard">
            <div className="cardHeader">
                <div className="headerImg" style={{ backgroundImage: `url(${props.img})` }}></div>
                <div className="headerTitle">{props.title}</div>
            </div>
            <div className="cardBody">
                <p className="bodyPrice">{props.price}</p>
                <p className="bodyTitle">Selecione uma plataforma:</p>
                <div className="bodyPlatforms">
                    {isXbox ? <Xbox /> : ''}
                    {isPS ? <PS /> : ''}
                    {isPC ? <PC /> : ''}
                    {isSwitch ? <Switch /> : ''}
                    {isAndroid ? <Android /> : ''}
                </div>
            </div>
            <div className="cardFooter">
                <button className="footerButton" type="submit">Adicionar ao carrinho</button>
            </div>
        </div >
    );
}