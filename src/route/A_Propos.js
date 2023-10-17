import React from 'react'
import { Image } from '../Composant/Component';
import AccordionComponent from '../Composant/Accordeon'

export default function A_Propos() {
  return (
    <div>
      <div className='image-header'><div><Image src='images\img-header2.svg' /></div></div>
      <div>
        <AccordionComponent type='text' titre='Fiabilité' text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' />
        <AccordionComponent type='text' titre='Respect' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
        <AccordionComponent type='text' titre='Service' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
        <AccordionComponent type='text' titre='Sécurité' text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </div>
  )
}
