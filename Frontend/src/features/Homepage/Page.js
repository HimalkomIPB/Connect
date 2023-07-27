import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '../../client';
import './Page.css'
import connect from '../../Assets/Connect/Logo Connect.png'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer';
import agriux from '../../Assets/Ilkommunity/Agriux 200 x 200.png'
import CSI from '../../Assets/Ilkommunity/CSI 200 x 200.png'
import agribot from '../../Assets/Ilkommunity/Agribot 200 x 200.png'
import CP from '../../Assets/Ilkommunity/CP 200 x 200.png'
import daming from '../../Assets/Ilkommunity/Daming 200 x 200.png'
import iwdc from '../../Assets/Ilkommunity/IWDC 200 x 200.png'
import gary from '../../Assets/Ilkommunity/Gary 200 x 200.png'
import mad from '../../Assets/Ilkommunity/MAD 200 x 200.png'
import Card from "../../component/Komnews/Card"
import logo1 from '../../Assets/Program Kerja/logo/IT_Today.svg'
import logo2 from '../../Assets/Program Kerja/logo/cpsc.svg'

import btn_arrow from '../../Assets/Program Kerja/button/right-arrow.svg'



const Page = () => {
  const [activeSlide, setActiveSlide] = useState(0); // State for the active slide index

  const handleClick = (index) => {
    setActiveSlide(index);
  };

  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "komnews" ] | order(date desc)';
        const response = await client.fetch(query);
        setData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  const cards = Data.map(item => {
    return (
        <Card
            key={item.id}
            title={item.title}
            img={item.img}
            date={item.date}
            desc={item.desc}
            category={item.category}
        />
    )
  })
  return (
    <div id="homepage" className="background">
      <Navbar />
      {/* Main Page */}
      <section id="hero-home-container">
        <div className={`hero-home-slide1 ${activeSlide === 0 ? 'active-slide' : ''}`}>
          
          <motion.div
            whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}
            className="hero-home-content"
          >
          <div className="hero-home-logo-container">
            <img src={connect} alt="connect" className="hero-home-logo-connect"/>
          </div>

          <h1>CONNECT</h1>
          <h3>Together We Connect Each Other</h3>
          <p>Himpunan Mahasiswa Ilmu Komputer 2022/2023</p>
          </motion.div>
        </div>
        <div className={`hero-home-slide2 ${activeSlide === 1 ? 'active-slide' : ''}`}>
          <div className="hero-home-logo-container">
            <img src={connect} alt="connect" className="hero-home-logo-connect"/>
          </div>

          <div className='hero-slide2-container1'></div>
          <div className='hero-slide2-container2'></div>
         
          <h1>CONNECT</h1>
          <h3>Together We Connect Each Other</h3>
          

        </div>
      </section>

      {/* Ilkommunity */}
      <div className='homepage-3section-wrapper'>
          <motion.div 
            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}
            id="ilkomunity-homepage"
          >
            <div className="header">
              <h2>ILKOMMUNITY</h2>
            </div>
            <div className="ilkommunity">
              <a  href="/Ilkommunity-AgriUX" className='fade-in'>
                <div className="ilkommunity-agriux">
                    <img src={agriux} alt="AgriUX" />
                    <p>AGRIUX</p>
                </div>
              </a>
              <a href='/Ilkommunity-CSI' className='fade-in'>
                <div 
                
                className="ilkommunity-csi"
                >
                  <img src={CSI} alt="CSI" />
                  <p>CSI</p>
                </div>
              </a>
              <a href="Ilkommunity-Agribot" className='fade-in'>
                <div 
                  
                  className="ilkommunity-agribot"
                >
                  <img src={agribot} alt="Agribot" />
                  <p>AGRIBOT</p>
                </div>
              </a>
              <a href="/Ilkommunity-CP" className='fade-in'>
                <div 
                 
                  className="ilkommunity-cp"
                >
                  <img src={CP} alt="CP" />
                  <p>CP</p>
                </div>
              </a>
              <a href="/Ilkommunity-DAMING" className='fade-in'>
                <div 
                 
                  className="ilkommunity-daming"
                >
                  <img src={daming} alt="Daming" />
                  <p>DAMING</p>
                </div>
              </a>
              <a href="/Ilkommunity-IWDC" className='fade-in'>
                <div 
                  
                  className="ilkommunity-iwdc"
                >
                  <img src={iwdc} alt="IWDC" />
                  <p>IWDC</p>
                </div>
              </a>
              <a href="/Ilkommunity-GARY" className='fade-in'>
                <div 
                 
                  className="ilkommunity-gary"
                >
                  <img src={gary} alt="GARY" />
                  <p>GARY</p>
                </div>
              </a>
              <a href="/Ilkommunity-MAD" className='fade-in'>
                <div 
                  className="ilkommunity-mad"
                >
                  <img src={mad} alt="MAD" />
                  <p>MAD</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Megaproker */}
          <section id="Megaproker-Home-Container">

              <div className="Megaproker-Home-Header">
                <h3>MEGAPROKER</h3>
              </div>
              
              <motion.div 
                whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                transition={{duration: 0.35}}
                className="Megaproker-Home-Card Card1"
              >
                  <div className="Megaproker-Home-Card1-bg"/>
                  <div className="Megaproker-Home-Card1-logo">
                    <img src={logo1} alt="ittoday"/>
                  </div>
                  <div className="Megaproker-Home-Card-info">
                    <h1>IT TODAY</h1>
                    <p><span className='bold'>IT Today</span> merupakan serangkaian acara nasional yang bertemakan teknologi informasi dalam dunia Agriculture. Kegiatan ini terdiri atas HackToday (Capture the Flag), UXToday (UI/UX Design), Poster Competition, Workshop. Festival, dan National Seminar mengenai teknologi informasi terkini.</p>
                    <button><span className="bold">Selengkapnya</span> <img src={btn_arrow}/></button>
                  </div>
              </motion.div>

              <motion.div 
                whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                transition={{duration: 0.35}}
                className="Megaproker-Home-Card Card2"
              >
                  <div className="Megaproker-Home-Card2-logo">
                    <img src={logo2} alt="cpsc"/>
                  </div>
                  <div className="Megaproker-Home-Card-info">
                    <h1>CPSC</h1>
                    <p><span className="bold">Computer Problem Solving Competition (CPSC)</span> merupakan ajang perlombaan tahunan yang diselenggarakan oleh Himpunan Mahasiswa Ilmu Komputer (Himalkom) IPB dan merupakan rangkaian dari acara Pesta Sains Nasional (PSN) FMIPA IPB</p>
                    <button><span className="bold">Selengkapnya</span> <img src={btn_arrow}/></button>
                  </div>
              </motion.div>
          </section>

          {/* Komnews */}
          <motion.div
            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}
            id="Komnews-Home-container"
          >
            <div className="Komnews-Home-Header">
              <h2>KOMNEWS</h2>
            </div>

            <div className="Komnews-Home-Content-Container">
              {cards}
            </div>
          </motion.div>

      </div>

      
      <Footer />
    </div>
  );
}

export default Page