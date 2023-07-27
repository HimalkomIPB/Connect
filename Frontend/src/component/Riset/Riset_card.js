import React from "react";
import { motion } from 'framer-motion';
import "./Riset_card.css";

const Riset_card = (props) => {
    const redirectToLink = () => {
        window.open(props.link, '_blank');
    }
    return (
    <motion.div 
        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
        transition={{duration: 0.5}}
        className='Riset-card'
    >
        <div className="image-container">
            <img src={require('../../Assets/Riset/' + props.img + '.png')} alt="Riset-Icon"/>
        </div>
        <h3 className='Judul-Riset'>{props.title}</h3> 
        <p className='Riset-Created'>{props.date}</p> 
        <p><a href="#" onClick={redirectToLink}>Baca Selengkapnya</a></p>
    </motion.div>
    )
};

export default Riset_card;
