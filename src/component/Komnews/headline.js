import React from 'react'
import gambar from "./../../Assets/Komnews/Headline/image.png";
import data from "../../Data/newsdata"
import "./Headline.css"
import { useNavigate } from 'react-router-dom';


const Headline = () => {
  const topic = data[0]

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/Newsdesc', { state: { berita: topic } });
  };
  return (
    <div className='Headline'>
        <div className='title-head'>
          <h1>TODAY HEADLINE</h1>
        </div>
        <div className='headline'>
          <div className='desc-news'>
            <h1>{topic.title}</h1>
            <p>{topic.thumbnail}</p>
            <a className='button_headline' onClick={handleCardClick} ><span className='bold'>Read More {'>'}</span></a>
          </div>
          <div className='image'>
            <img src={require('../../Assets/Komnews/Topic/' + topic.img)} alt="gambar" width={344} className="headline_img"/>
          </div>
        </div>
    </div>
  )
}

export default Headline