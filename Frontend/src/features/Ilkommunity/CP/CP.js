import React, { useState } from "react";
import "./CP.css";
import {motion} from 'framer-motion'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import Navbar from "../../../component/Navbar/Navbar";
import Footer from "../../../component/Footer/Footer";
import dokum1 from '../../../Assets/Ilkommunity/CP/CP-Dokum1.png'
import dokum2 from '../../../Assets/Ilkommunity/CP/CP-Dokum2.png'
import dokum3 from '../../../Assets/Ilkommunity/CP/CP-Dokum3.png'
import dokum4 from '../../../Assets/Ilkommunity/CP/CP-Dokum4.png'
import dokum5 from '../../../Assets/Ilkommunity/CP/CP-Dokum5.png'


const CP = () => {
  const [showDeskripsi, setShowDeskripsi] = useState(true);

  const handleDeskripsiClick = () => {
    setShowDeskripsi(true);
  };

  const handleTujuanClick = () => {
    setShowDeskripsi(false);
  };


  const slides = [
    { url: dokum1 },
    { url: dokum2 },
    { url: dokum3 },
    { url: dokum4 },
    { url: dokum5 },
  ];
  return (
    <div>
      <Navbar />
      <section>
        <div id="CP-header-container">
          <div className="CP-header-wrapper">
            <motion.div 
              whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}
              className="CP-header"
            >
              <h2>CP</h2>
              <p>Competitive Programming IPB adalah komunitas yang bergerak pada perlombaan pemrograman kompetitif yang merupakan kompetisi menyelesaikan suatu masalah secara algoritmik.<br />
                <br />
                Setiap Senin pukul 18:45 di Localhost (FMIPA lantai 4)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div id="CP-main-container">
          <motion.div
            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}} 
            className="CP-content-container"
          >
            <div className="CP-content-deskripsi-tujuan">
              <h2 id='CP-deskripsi'
                onClick={handleDeskripsiClick}
                className={showDeskripsi ? "CP-active" : ""}
              >Deskripsi
              </h2>
              <h2 id='CP-tujuan'
                onClick={handleTujuanClick}
                className={!showDeskripsi ? "CP-active" : ""}>
                Tujuan
              </h2>
            </div>
            {
              showDeskripsi
                ? //if true
                <div className="CP-deskripsi-content">
                  <p>Competitive Programming adalah sebuah kegiatan penyelesaian masalah (problem solving) tertentu menggunakan program komputer dengan mengedepankan algoritma yang paling optimal. Competitive Programming membutuhkan kemampuan logika, matematika dan algoritma yang baik untuk menyelesaikan masalah-masalah yang diberikan.
                  </p>
                </div>
                : //else
                <div className="CP-tujuan-content">
                  <h3>Tujuan Competitive Programming IPB adalah mendukung anggota-anggotanya untuk meraih juara pada perlombaan-perlombaan pemrograman kompetitif.</h3>
                </div>
            }

            <motion.div
              whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}} 
              className="CP-prestasi-container"
            >
              <div className="CP-prestasi-header">
                <h2>PRESTASI</h2>
              </div>
              <div className="CP-prestasi-content">
                <li>Finalis JOINTS</li>
                <li>CP Finalis Arkavidia</li>
                <li>CP Peserta Regional ICPC</li>
                <li>CP Finalis Gemastik</li>
                <li>Divisi I</li>
              </div>
            </motion.div>
          </motion.div>

          <ImageSlider slides={slides} />

          <motion.div 
            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}
            className="CP-narahubung-container"
          >
            <div className="CP-narahubung-header">
              <h2>NARAHUBUNG</h2>
            </div>
            <div className="CP-narahubung-content">
              <h3>Muhammad Zahran</h3>
              <h3>Whatsapp: 081370497856</h3>
            </div>
          </motion.div>
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default CP;
