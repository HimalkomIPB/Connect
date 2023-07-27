import React from 'react'
import "./Headline.css"
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import DOMPurify from 'dompurify';

const Headline = React.memo((props) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/Newsdesc', { state: { berita: props } });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sanitizedDesc = DOMPurify.sanitize(props.desc);

  return (
    <motion.div 
      whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
      transition={{duration: 0.35}}
      className='Headline'
    >
        <div className='title-head'>
          <h1>TODAY HEADLINE</h1>
        </div>
        <div className='headline'>
          <div className='desc-news'>
            <h1>{props.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: sanitizedDesc }}></p>
            <a className='button_headline' onClick={handleCardClick} ><span className='bold'>Read More {'>'}</span></a>
          </div>
          <div className='image'>
            <img src={require('../../Assets/Komnews/Topic/' + props.img )} alt="gambar" className="headline_img" loading="lazy"/>
          </div>
        </div>
    </motion.div>
  )
});

export default Headline