import React, { useState, useEffect } from 'react';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./IGallery.css"
import Card from "../../component/IGallery/IGallery_card"
import { client } from '../../client';
const IGallery = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "igallery"]';
    client.fetch(query)
      .then((data) => setData(data))
  }, [])

  const cards = Data.map(item => {
    return (
        <Card
          title={item.title}
          category={item.category}
          desc={item.desc}
          created={item.created}
          img={item.img}
          link={item.link}
        />
    )
  })

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    setFadeOut(true);
    setTimeout(() => {
    setFadeOut(false);
    }, 200);
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
    setFadeOut(true);
    setTimeout(() => {
    setFadeOut(false);
    }, 200);
  };

  const filteredCards = selectedCategory
    ? cards.filter((item) => item.props.category === selectedCategory)
    : cards;

  const cardElements = filteredCards.map((card, index) => (
    <div key={index} className={fadeOut ? 'fade-out' : ''}>
      {card}
    </div>
  ));

  return (
    <div>
        <Navbar />
        <div id="IG-header-container">
            <div className="IG-header-wrapper">
                <div className="IG-header">
                    <h2>I-GALLERY</h2>
                    <p>I-Gallery adalah platform yang berisi kumpulan projek-projek yang telah dibuat oleh mahasiswa ilmu komputer. I-Gallery menampilkan projek dari setiap mata kuliah berprojek. Tujuan dari I-Gallery adalah untuk menunjukan projek yang telah dibuat oleh mahasiswa ilmu komputer.</p>
                </div>
            </div>
        </div>
        <div className='IG-main'>
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
          <div className='IG-main-content'>
            {cardElements}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default IGallery