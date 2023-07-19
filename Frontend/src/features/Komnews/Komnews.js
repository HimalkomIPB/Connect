import React, { useState, useEffect } from 'react';
import './Komnews.css';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import News from "../../component/Komnews/news";
import Headline from "../../component/Komnews/headline";
import { client } from '../../client';

const Komnews = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "komnews"]';
        const response = await client.fetch(query);
        setData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  const cards = data.map(item => {
    return (
      <News
        key={item.id}
        title={item.title}
        category={item.category}
        img={item.img}
        date={item.date}
        desc={item.desc}
      />
    );
  });

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
      <Navbar/>
      {/* Hero */}
      <section>
        <div className='hero_news'>
          <h1>KOMNEWS</h1>
          <p><span className='komnews-bold'>KOMNEWS</span> Merupakan tempat untuk membaca berita seputar Ilmu Komputer</p>
        </div>
      </section>
      {/* Headline */}
      <section>
        <Headline/>
      </section>
      {/* Topics */}
      <section>
        <div className='topics'>
          <div className='topics-list'>
            {/* Topic */}
            {cardElements}
          </div>
          <div className='topics-rec'>
            <h1>Recommended Topic</h1>
            <div className='rec-list'>
              <button className='recommend' onClick={handleAllClick}>
                <span>All</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('Self Improvement')}>
                <span>Self Improvement</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('Social')}>
                <span>Social</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('Kehidupan Mahasiswa')}>
                <span>Kehidupan Mahasiswa</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('Technology')}>
                <span>Technology</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('Data Science')}>
                <span>Data Science</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('AI')}>
                <span>AI</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('Data Mining')}>
                <span>Data Mining</span>
              </button>
              <button className='recommend' onClick={() => handleFilterClick('Machine Learning')}>
                <span>Machine Learning</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Komnews;