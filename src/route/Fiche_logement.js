import React from 'react'
import { useParams } from 'react-router-dom'
import { Tag } from '../Composant/Component';
import AccordionComponent from '../Composant/Accordeon'
import data from '../logements.json';
import '../css/logement.css';

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function Tags(props) {
  const resultat = data.filter(element => element.id === props.id)[0];
  const tags = resultat['tags'].map((tag) => (
    <Tag text={tag} />
  ));
  return <div>{tags}</div>;
}

function Equipements(props){
  const resultat = data.filter(element => element.id === props.id)[0];
  return <AccordionComponent type='list' titre='Équipements' list={resultat['equipments']}/>;
}

export default function Fiche_logement() {
  const { id } = useParams();
  return (
    <>
      <div>Fiche logement numéro : {id}</div>
      <div><Tags id={id} /></div>
      <div><Equipements id={id}/></div>
    </>
  )
}
