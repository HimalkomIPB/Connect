import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./News.css";

const News = (props) => {
  const navigate = useNavigate();
  const handleNewsClick = () => {
    navigate('/Newsdesc', { state: { berita: props } });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='topic' onClick={handleNewsClick}>
      <div className='topic-desc'>
        <p>Selected for you</p>
        <h1>{props.title}</h1>
        <p>{props.thumbnail}</p>
        <div className='topic-category'>
          <p>{props.category}</p>
        </div>
      </div>
      <img src={require('../../Assets/Komnews/Topic/' + props.img)} className="news_img" alt="gambar" width={140} height={140} />
    </div>
  );
}

export default News;
