import React from 'react'
import { useParams } from 'react-router-dom'
import Image from '../Composant/Image';
import Tag from '../Composant/Tag';
import AccordionComponent from '../Composant/Accordeon'
import data from '../logements.json';
import '../css/logement.css';
import Carousel from '../Composant/Carousel';
import Erreur404 from '../route/Erreur404';

function Tags(props) {
  const resultat = data.filter(element => element.id === props.id)[0];
  const tags = resultat['tags'].map((tag,id) => (
    <Tag key={id} text={tag} />
  ));
  return <div className='tag'>{tags}</div>;
}

function Rating(props) {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.nomber) {
      stars.push(<Image key={i} src='../images/etoile_active.svg' alt={`Étoile active ${i + 1}`} />);
    } else {
      stars.push(<Image key={i} src='../images/etoile_inactive.svg' alt={`Étoile inactive ${i + 1}`} />);
    }
  }

  return <div>{stars}</div>;
}

export default function Fiche_logement() {
  const { id } = useParams();
  const logement = data.filter(element => element.id === id)[0];
  if(logement === undefined){
    return <><Erreur404 /></>;
  }
  let nomPrenom = logement.host.name.split(' ');

  return (
    <>
      <Carousel images={logement.pictures} />
      <div className='flex'>
        <div>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <div><Tags id={id} /></div>
        </div>
        <div className='flex-col-rigth'>
          <div className='profil'>
            <div>
              <div>{nomPrenom[0]}</div>
              <div>{nomPrenom[1]}</div>
            </div>
            <Image src={logement.host.picture} alt="Image de profil" />
          </div>
          <div>
            <Rating nomber={logement.rating} />
          </div>
        </div>
      </div>
      <div className='flex'>
        <AccordionComponent isrow_2={true} type='text' titre='Description' text={logement['description']}/>
        <AccordionComponent isrow_2={true} type='list' titre='Équipements' list={logement['equipments']}/>
      </div>
    </>
  )
}
