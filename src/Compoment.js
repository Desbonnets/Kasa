import React from 'react';
import './css/Accueil.css';
import {Link, useLocation } from 'react-router-dom';

export function Image(props){     
    return <img className={props.className} src={props.src} alt={props.alt} />
}

export function Lien(props){
    if(useLocation().pathname === props.to){
        return <Link className='link' to={props.to}>{props.text}</Link>
    }else{
        return <Link to={props.to}>{props.text}</Link>
    }
}

export function Location_card(props){
    const lien = '/Fiche_Logement/'+props.data.id;
    return  <Link className='location_card' to={lien}>
                <Image className='location_card' />
                <h4>{props.data.title}</h4>
            </Link>
}