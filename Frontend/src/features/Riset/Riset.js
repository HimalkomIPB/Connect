import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Riset.css';

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import HeaderIcon from '../../Assets/Riset/Hero-Icon.svg';
import Data from "../../Data/Riset_data"
import Card from "../../component/Riset/Riset_card"


const Riset = () => {
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
      });
    
    return (
        <div>
            <Navbar />
            {/* hero */}
            <section>
                <div className="Riset-Header-Container">
                    <div className="Riset-Header-Wrapper">
                        <motion.div 
                            variants={fadeInVariants}
                            initial="hidden"
                            animate="visible"
                            className="Riset-Header"
                        >
                            <h2>Riset Ilkomerz</h2>
                            <p> <span className='bold'>Riset Ilkomerz </span>merupakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi ilkomerz untuk membangun Himalkom berdasarkan kebutuhan ilkomerz.</p>
                        </motion.div>
                        <motion.div 
                           variants={fadeInVariants}
                           initial="hidden"
                           animate="visible"
                            className="Riset-Icon"
                        >
                            <img src={HeaderIcon} alt="Riset icon" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main */}
            <section>
                <div className="Riset-Main-Container">
                    <div className="Riset-Main-Wrapper">
                        <div id="Riset-Main-Column">
                            {cards}
                        </div>
                    </div>
                </div>
            </section>

            
            <Footer />
        </div>
    )
}

export default Riset