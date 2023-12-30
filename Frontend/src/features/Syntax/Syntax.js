import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Syntax.css';

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import HeaderIcon from '../../Assets/Riset/Hero-Icon.svg';
import Data from "../../Data/Syntax_data"
import Card from "../../component/Syntax/Syntax_card"


const Syntax = () => {
    const fadeInVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: 'easeInOut',
          },
        },
      };

    const cards = Data.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
            img={item.img}
            link={item.link}
          />
        );
      }).reverse();
    
    return (
        <div>
        <Navbar />
        {/* hero */}
        <section>
            <div className="Syntax-Header-Container">
                <div className="Syntax-Header-Wrapper">
                    <motion.div 
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="Syntax-Header"
                    >
                        <h2>Syntax</h2>
                        <p> <span className='bold'>Syntax </span>merupakan majalah tahunan yang dibuat oleh HImalkom IPB untuk memberikan informasi mengenai kaleidoskop program kerja yang telah terlaksana serta informasi lainnya dalam ruang lingkup departemen Ilmu Komputer IPB.</p>
                    </motion.div>
                    <motion.div 
                       variants={fadeInVariants}
                       initial="hidden"
                       animate="visible"
                        className="Syntax-Icon"
                    >
                        <img src={HeaderIcon} alt="Syntax icon" />
                    </motion.div>
                </div>
            </div>
        </section>
    
        {/* Main */}
        <section>
            <div className="Syntax-Main-Container">
                <div className="Syntax-Main-Wrapper">
                    <div id="Syntax-Main-Column">
                        {cards}
                    </div>
                </div>
            </div>
        </section>
    
        <Footer />
    </div>
    
    )
}

export default Syntax