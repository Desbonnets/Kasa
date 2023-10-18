import React from 'react';
import '../css/Accueil.css';
import {Link, useLocation } from 'react-router-dom';

export default function Lien(props){
    if(useLocation().pathname === props.to){
        return <Link className='link' to={props.to}>{props.text}</Link>
    }else{
        return <Link to={props.to}>{props.text}</Link>
    }
}