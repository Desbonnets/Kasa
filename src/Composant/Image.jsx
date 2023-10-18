import React from 'react';
import '../css/Accueil.css';

export default function Image(props){     
    return <img key={props.id} className={props.className} src={props.src} alt={props.alt} />
}