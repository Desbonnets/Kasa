import React from 'react'
import 'react-router-dom';
import '../css/Accueil.css';
import LocationCard from '../Composant/LocationCard';
import Image from '../Composant/Image';
import data from '../logements.json';

function Galerie() {
  const locationCards = data.map((location) => (
    <LocationCard key={location.id} data={location} />
  ));

  return <div className='galerie' >{locationCards}</div>;
}

export default function Accueil() {
  return (
    <>
      <div className='image-header'><div><h2>Chez vous, partout et ailleurs</h2><Image src='../images/accueil_img.svg' /></div></div>
      <Galerie />
    </>
  )
}
