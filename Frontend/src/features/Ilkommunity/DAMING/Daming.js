import React, { useState } from "react";
import {motion} from 'framer-motion'
import "./Daming.css";
import Navbar from "../../../component/Navbar/Navbar";
import Footer from "../../../component/Footer/Footer";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import ImageSlider from "../../../component/ImageSlider/ImageSlider";

// Ambil dokumentasi dari file lokal
import foto1 from './../../../Assets/Ilkommunity/DAMING/dokumentasi/1.svg'
import foto2 from './../../../Assets/Ilkommunity/DAMING/dokumentasi/2.svg'
import foto3 from './../../../Assets/Ilkommunity/DAMING/dokumentasi/3.svg'
import foto4 from './../../../Assets/Ilkommunity/DAMING/dokumentasi/4.svg'


const DAMING = () => {
  const [showDeskripsi, setShowDeskripsi] = useState(true);

  const handleDeskripsiClick = () => {
    setShowDeskripsi(true);
  };

  const handleTujuanClick = () => {
    setShowDeskripsi(false);
  };


  // add slide from url online\
  const slides = [
    { url: foto1 },
    { url: foto2 },
    { url: foto3 },
    { url: foto4 }

  ];

  return (
    <div>
      <Navbar />
      <section>
        <div id="DAMING-header-container">
          <div className="DAMING-header-wrapper">
            <motion.div 
              whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}
              className="DAMING-header"
            >
              <h2>DAMING</h2>
              <p>
                {" "}
                Data Mining (Daming) merupakan komunitas yang bergerak di bidang penambangan dan pengolahan data.<br />
                <br />
                Setiap Rabu pukul 19:00 <br />di Localhost (FMIPA lantai 4)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div id="DAMING-main-container">
          <motion.div 
            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}
            className="DAMING-content-container"
          >
            <div className="DAMING-content-deskripsi-tujuan">
              <h2
                id="DAMING-deskripsi"
                onClick={handleDeskripsiClick}
                className={showDeskripsi ? "active" : ""}
              >
                Deskripsi
              </h2>

              <h2
                id="DAMING-tujuan"
                onClick={handleTujuanClick}
                className={!showDeskripsi ? "active" : ""}
              >
                Tujuan
              </h2>
            </div>

            {showDeskripsi ? (
              <div className="DAMING-deskripsi-content">
                <p>
                  Komunitas Data Mining merupakan komunitas yang memfasilitasi
                  mahasiswa IPB yang memiliki minat atau ketertarikan terhadap
                  bidang Data Science. Di Komunitas ini mempelajari bagaimana
                  caranya suatu data dapat memberikan insight atau informasi
                  yang tersembunyi, baik mengetahui pola ataupun memprediksi apa
                  yang akan terjadi di masa yang akan datang.
                  <br />
                  <br />
                  Harapannya di komunitas ini, peserta komunitas dapat
                  menerapkan ilmunya untuk menyelesaikan masalah dan dapat
                  mempersiapkan peserta komunitas untuk mengikuti lomba, seperti
                  di Joints UGM, Find-IT UGM, Compfest (Data Science Academy),
                  bahkan Gemastik.
                </p>
              </div>
            ) : (
              <div className="DAMING-tujuan-content">
                <p>
                  Meningkatkan kemampuan dalam penambangan dan pengolahan data.
                </p>
              </div>
            )}

            <motion.div
              whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}} 
              className="DAMING-prestasi-container"
            >
              <div className="DAMING-prestasi-header">
                <h2>PRESTASI</h2>
              </div>
              <div className="DAMING-prestasi-content">
                  <li>Juara 1 Satria dara 2022 </li>
                  <li>Finalis Joints Data Competition 2023 </li>
                  <li>Juara 3 Gammafest - Data Science Competition 2023</li>
              </div>
            </motion.div>
          </motion.div>

          <ImageSlider slides={slides} />

          <motion.div
            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}} 
            className="DAMING-narahubung-container"
          >
            <div className="DAMING-narahubung-header">
              <h2>NARAHUBUNG</h2>
            </div>
            <div className="DAMING-narahubung-content">
              <h3>Andika Riski Sururi</h3>
              <h3>Whatsapp: 085694503296</h3>
            </div>
          </motion.div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DAMING;
