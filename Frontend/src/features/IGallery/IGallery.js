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
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
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
        <h1>DAFTAR MATKUL</h1>
        <div className='IG-main-button'>
          <button className='IG-list' onClick={handleAllClick}>
            <span>Semua</span>
          </button>
          <button className='IG-list' onClick={() => handleFilterClick('Basis Data')}>
            <span>Basis Data</span>
          </button>
          <button className='IG-list' onClick={() => handleFilterClick('Rekayasa Perangkat Lunak')}>
            <span>Rekayasa Perangkat Lunak</span>
          </button>
          <button className='IG-list' onClick={() => handleFilterClick('Grafika Komputer')}>
            <span>Grafika Komputer</span>
          </button>
          <button className='IG-list' onClick={() => handleFilterClick('Analisis Desain Sistem')}>
            <span>Analisis Desain Sistem</span>
          </button>
          <button className='IG-list' onClick={() => handleFilterClick('Desain Pengalaman Pengguna')}>
            <span>Desain Pengalaman Pengguna</span>
          </button>
          <button className='IG-list' onClick={() => handleFilterClick('Pengolahan Citra Digital')}>
            <span>Pengolahan Citra Digital</span>
          </button>
        </div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className='IG-main-content'
        >
          {cardElements}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default IGallery;
