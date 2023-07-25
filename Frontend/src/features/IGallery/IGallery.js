import React, { useState } from 'react';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./IGallery.css"
import Card from "../../component/IGallery/IGallery_card"
import Data from "../../Data/IGallery_data"
import { motion } from 'framer-motion';

const IGallery = () => {

  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        category={item.category}
        desc={item.desc}
        created={item.created}
        img={item.img}
        link={item.link}
      />
    );
  });

  console.log(Data);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
  };

  const filteredCards = selectedCategory
    ? cards.filter((item) => item.props.category === selectedCategory)
    : cards;

  const cardElements = filteredCards.map((card, index) => (
    <div key={index}>
      {card}
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div
        id="IG-header-container"
      >
        <div className="IG-header-wrapper">
          <motion.div
            whileInView={{ y: [80, 40, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}
            className="IG-header"
          >
            <h2>I-GALLERY</h2>
            <p>
              I-Gallery adalah platform yang berisi kumpulan projek-projek yang telah dibuat oleh mahasiswa ilmu komputer. I-Gallery menampilkan projek dari setiap mata kuliah berprojek. Tujuan dari I-Gallery adalah untuk menunjukan projek yang telah dibuat oleh mahasiswa ilmu komputer.
            </p>
          </motion.div>
        </div>
      </div>
      <div
        className="IG-main"
      >
        <motion.div
          whileInView={{ y: [80, 40, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}}
        >
        <h1 className='IG-h1'>DAFTAR MATKUL</h1>
        <div className='IG-main-button'>
          <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='IG-list'
            onClick={handleAllClick}
          >
            <span>Semua</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='IG-list'
            onClick={() => handleFilterClick('Basis Data')}
          >
            <span>Basis Data</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='IG-list'
            onClick={() => handleFilterClick('Rekayasa Perangkat Lunak')}
          >
            <span>Rekayasa Perangkat Lunak</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='IG-list'
            onClick={() => handleFilterClick('Grafika Komputer')}
          >
            <span>Grafika Komputer</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='IG-list'
            onClick={() => handleFilterClick('Analisis Desain Sistem')}
          >
            <span>Analisis Desain Sistem</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='IG-list'
            onClick={() => handleFilterClick('Desain Pengalaman Pengguna')}
          >
            <span>Desain Pengalaman Pengguna</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: [null, 1.09, 1.06] }}
            transition={{ duration: 0.4 }}
            className='IG-list'
            onClick={() => handleFilterClick('Pengolahan Citra Digital')}
          >
            <span>Pengolahan Citra Digital</span>
          </motion.button>
        </div>
        </motion.div>
        <div
          className='IG-main-content'
        >
          {cardElements}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IGallery;
