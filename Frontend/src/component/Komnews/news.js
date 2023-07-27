import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./news.css";
import { urlFor } from '../../client';
import DOMPurify from 'dompurify';

const News = (props) => {
  const navigate = useNavigate();
  const handleNewsClick = () => {
    navigate('/Newsdesc', { state: { berita: props } });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sanitizedDesc = DOMPurify.sanitize(props.desc);

  return (
    <div className='topic' onClick={handleNewsClick}>
      <div className='topic-desc'>
        <p>Selected for you</p>
        <h1>{props.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: sanitizedDesc }}></p>
        <div className='topic-category'>
          <p>{props.category}</p>
        </div>
      </div>
      <img src={urlFor(props.img).url()} className="news_img" alt="gambar" />
    </div>
  );
}

export default News;
