import React from 'react'
import './Komnews.css'
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import News from "../../component/Komnews/news";
import Data from "../../component/Komnews/newsdata";
import Headline from "../../component/Komnews/headline";

const Komnews = () => {
  const cards = Data.map(item => {
    return (
        <News
            key={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            category={item.category}
            img={item.img}
        />
    )
})
  return (
    <div>
        <Navbar/>
          {/* Hero */}
          <section>
            <div className='hero_news'>
              <h1>KOMNEWS</h1>
              <p><span>KOMNEWS</span> Merupakan tempat untuk membaca berita seputar Ilmu Komputer</p>
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
                {cards}
              </div>
              <div className='topics-rec'>
                <h1>Recommended Topic</h1>
                <div className='rec-list'>
                  <button className='recommend'><span>Programming</span></button>
                  <button className='recommend'><span>Leadership</span></button>
                  <button className='recommend'><span>Writing</span></button>
                  <button className='recommend'><span>Technology</span></button>
                  <button className='recommend'><span>Data Science</span></button>
                  <button className='recommend'><span>AI</span></button>
                  <button className='recommend'><span>Data Mining</span></button>
                  <button className='recommend'><span>Machine Learning</span></button>
                </div>
              </div>
            </div>
          </section>
        <Footer/>
    </div>
  )
}

export default Komnews