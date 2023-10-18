import React from 'react';
import '../css/Accueil.css';
import {Link} from 'react-router-dom';
import Image from '../Composant/Image';

export default function LocationCard(props){
    const lien = '/Fiche_Logement/'+props.data.id;
    return  <Link className='location_card' to={lien}>
                <Image src={props.data.cover} className='location_card' />
                <h4>{props.data.title}</h4>
            </Link>
}