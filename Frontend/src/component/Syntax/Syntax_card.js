import React from "react";
import { motion } from 'framer-motion';
import "./Syntax_card.css";

const Syntax_card = (props) => {
    const redirectToLink = () => {
        window.open(props.link, '_blank');
    }
    return (
    <motion.div 
        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{duration: 0.5}}
        className='Syntax-card'
    >
        <img 
            className="image-container"
            onClick={redirectToLink}
            src={require('../../Assets/Syntax/' + props.img + '.png')} 
            alt="Syntax-Icon"
        />
        <h3 className='Judul-Syntax'>{props.title}</h3> 
        <p className='Syntax-Created'>{props.date}</p> 
    </motion.div>
    )
};

export default Syntax_card;
