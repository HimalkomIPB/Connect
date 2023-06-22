import React from 'react'
import './Komnews.css'
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import gambar from "./../../Assets/Komnews/Headline/image.png";
import News from "../../component/Komnews/news"
import Data from "../../component/Komnews/newsdata"

const Komnews = () => {
  const cards = Data.map(item => {
    return (
        <News
            key={item.id}
            title={item.title}
            desc={item.description}
            category={item.category}
            // img={item.img}
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
            <div className='Headline'>
              <div className='title-head'>
                <h1>TODAY HEADLINE</h1>
              </div>
              <div className='headline'>
                <div className='desc-news'>
                  <h1>Pelantikan Rektor IPB University Periode 2023-2028</h1>
                  <p>Pada 18 Januari 2023 bertempat di Grha Widya Wisuda (GWW) Kampus IPB Dramaga, Bogor dilangsungkan Sidang Paripurna Terbuka Majelis Wali Amanat (MWA) IPB University dengan agenda Pelantikan Rektor IPB University Periode 2023-2028. Prof Arif Satria terpilih sebagai Rektor IPB University periode 2023-2028. Prof Arif Satria menjadi rektor terpilih berdasarkan hasil putusan MWA IPB University dalam Sidang Paripurna Tertutup yang digelar di IPB International Convention Center (IICC), Bogor, (9/11). Ini adalah periode kedua jabatan Prof Arif Satria sebagai Rektor IPB University</p>
                  <button className='button'><span className='bold'>Read More {'>'}</span></button>
                </div>
                <div className='image'>
                  <img src={gambar} alt="gambar" width={344}/>
                </div>
              </div>
            </div>
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