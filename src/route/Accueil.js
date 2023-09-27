import React from 'react'
import {Link} from 'react-router-dom';
import {Location_card} from '../Compoment.js';
import data from '../logements.json';

function Galerie(){
  const locationCards = data.map((location) => (
    <Location_card key={location.id} data={location} />
  ));

  return <div className='galerie' >{locationCards}</div>;
}

export default function Accueil() {
  return (
    <>
      <Galerie />
    </>
  )
}
