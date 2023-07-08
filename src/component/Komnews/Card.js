import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Card.css";

const Card = (props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/Newsdesc', { state: { berita: props } });
  };

  return (
    <div className="Komnews-Home-Content-Card" onClick={handleCardClick}>
      <div className="Komnews-Home-Content">
        <img src={require('../../Assets/Komnews/Topic/' + props.img)} alt="gambar" className='newscard_img' />
        <h2>{props.title}</h2>
        <div className='card_date'>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

