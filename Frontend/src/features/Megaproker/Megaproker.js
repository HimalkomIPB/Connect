import React from "react";
import "./Megaproker.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import logo1 from "../../Assets/Program Kerja/logo/IT_Today.svg";
import logo2 from "../../Assets/Program Kerja/logo/cpsc.svg";

import ittoday1 from "../../Assets/Megaproker/ittoday/dokum1.jpg";
import ittoday2 from "../../Assets/Megaproker/ittoday/dokum2.JPG";
import ittoday3 from "../../Assets/Megaproker/ittoday/dokum3.png";
import ittoday4 from "../../Assets/Megaproker/ittoday/dokum4.png";


import dokumimg from "../../Assets/Program Kerja/dokum/dokum.svg";
import btn_arrow from "../../Assets/Program Kerja/button/right-arrow.svg";

const Megaproker = () => {
  return (
    <div>
      <Navbar />
      {/* hero */}
      <section>
        <div className="megaproker-header">
          <h1>
            MEGAPROKER HIMALKOM  IPB 2023/2024
          </h1>
        </div>
      </section>

      {/* Main */}

      <section id="Megaproker-Page-Card-Container">
        <div className="Megaproker-Proker-Card Proker-Card1">
          <div className="Megaproker-Proker-Card-Header">
            <div className="Megaproker-Proker-Card-Header-bg" />
            <div className="Megaproker-Card1-logo">
              <img src={logo1} alt="ittoday" />
            </div>
            <div className="Megaproker-Card-info">
              <h1>IT TODAY</h1>
              <p>Prepare yourself to face rapid technology development</p>
            </div>
          </div>

          <div className="Megaproker-Proker-Content">
            <div className="Megaproker-Proker-Card-Content-bg" />
            <h3 className="rangkaian-acara">Rangkaian Acara</h3>


            <div className="carousel-container">
              <div className="carousel">
                <div className="box">
                  <img className="dokum-img-1" alt="dokum-img" src={ittoday1} />
                </div>
                <div className="box">
                  <img alt="dokum-img" src={ittoday2} />
                </div>
                <div className="box dokum-img-3">
                  <img className="dokum-img-3" alt="dokum-img" src={ittoday3} />
                </div>
              </div>
            </div>

            <h3 className="dokumentasi-vid-title">Dokumentasi Video</h3>

            <div className="dokumentasi-video">
              <div className="box">
                <a href="https://www.youtube.com/live/hASJJNsKFMA?feature=share">
                  <img alt="dokum-img" src={ittoday4} className="video" />
                </a>
              </div>
            </div>

            <button>
              <span className="bold">Selengkapnya</span> <img alt="arrow-btn" src={btn_arrow} />
            </button>
          </div>
        </div>

        <div className="Megaproker-Proker-Card Proker-Card2">
          <div className="Megaproker-Proker-Card-Header">
            <div className="Megaproker-Proker-Card-Header-bg" />
            <div className="Megaproker-Card2-logo">
              <img src={logo2} alt="ittoday" />
            </div>
            <div className="Megaproker-Card-info">
              <h1>CPSC</h1>
              <p>
                CPSC merupakan salah satu cabang lomba ilmu komputer di Pesta
                Sains Nasional yang diselenggarakan oleh IPB
              </p>
            </div>
          </div>

          <div className="Megaproker-Proker-Content">
            <div className="Megaproker-Proker-Card-Content-bg" />
            <h3 className="rangkaian-acara">Rangkaian Acara</h3>

            <div className="carousel-container">
              <div className="carousel">
                <div className="box">
                  <img  alt="dokum-img" src={dokumimg} />
                </div>
                <div className="box">
                  <img alt="dokum-img" src={dokumimg} />
                </div>
                <div className="box dokum-img-3">
                  <img alt="dokum-img" src={dokumimg} />
                </div>
              </div>
            </div>

            <h3 className="dokumentasi-vid-title">Dokumentasi Video</h3>

            <div className="dokumentasi-video">
              <div className="box">
                <a href="/Megaproker">
                  <img alt="dokum-img" src={dokumimg} className="video" />
                </a>
              </div>
            </div>
            

            <button>
              <span className="bold">Selengkapnya</span> <img alt="arrow-btn" src={btn_arrow} />
            </button>
          </div>
        </div>
      
      <div  id="button-etc">
        <button>
          <span className="bold">Proker Lainya</span>
        </button>
      </div>

      </section>

      <Footer />
    </div>
  );
};

export default Megaproker;
