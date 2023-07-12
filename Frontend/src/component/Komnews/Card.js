import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Card.css";
import { urlFor } from '../../client';

const Card = (props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/Newsdesc', { state: { berita: props } });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="Komnews-Home-Content-Card" onClick={handleCardClick}>
      <div className="Komnews-Home-Content">
        <img src={urlFor(props.img)} alt="gambar" className='newscard_img' />
        <h1>{props.title}</h1>
        <div className='card_date'>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

