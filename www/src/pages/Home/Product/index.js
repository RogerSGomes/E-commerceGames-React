import React from 'react';
import "./index.css";

import iconxbox from '../../../assets/images/iconxbox.png';
import iconps from '../../../assets/images/iconps.png';
import iconpc from '../../../assets/images/iconpc.png';
import iconswitch from '../../../assets/images/iconswitch.png';
import iconandroid from '../../../assets/images/iconandroid.png';

function Xbox() {
    return <div className="platformItem"><img className="platformImg" src={iconxbox} /></div>;
}

function PS() {
    return <div className="platformItem"><img className="platformImg" src={iconps} /></div>;
}

function PC() {
    return <div className="platformItem"><img className="platformImg" src={iconpc} /></div>;
}

function Switch() {
    return <div className="platformItem"><img className="platformImg" src={iconswitch} /></div>;
}

function Android() {
    return <div className="platformItem"><img className="platformImg" src={iconandroid} /></div>;
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
                <button className="footerButton" type="submit"><i className="material-icons">shopping_cart</i>Adicionar ao carrinho</button>
            </div>
        </div >
    );
}