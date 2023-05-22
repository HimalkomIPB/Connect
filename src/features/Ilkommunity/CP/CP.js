import React, { useState } from "react";
import "./CP.css";
import Navbar from "../../../component/Navbar/Navbar";
import Footer from "../../../component/Footer/Footer";

import ImageSlider from "../../../component/ImageSlider/ImageSlider";

const CP = () => {
  const [showDeskripsi, setShowDeskripsi] = useState(true);
  const toggleContent = () => {
    setShowDeskripsi(!showDeskripsi);
  };
  // add slide from url online\
  const slides = [
    {url: "http://placehold.it/350x150"},
    {url:"http://placehold.it/255x150"},
    {url:"http://placehold.it/295x150"},
    {url:"http://placehold.it/310x150"},
    {url:"http://placehold.it/450x150"},
  ];
  return (
    <div>
      <Navbar />
      <section>
        <div id="CP-header-container">
          <div className="CP-header-wrapper">
            <div className="CP-header">
              <h2>CP</h2>
              <p>
                {" "}
                Competitive Programming (CP) adalah <br />
                <br />
                Setiap Rabu pukul 19:00 di Localhost (FMIPA lantai 4)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
            <div id="CP-main-container">
                <div className="CP-content-container">
                    <div className="CP-content-deskripsi-tujuan">
                        <h2 id='CP-deskripsi' onClick={toggleContent}  className={showDeskripsi ? 'active' : ''}>Deskripsi</h2>

                        <h2 id='CP-tujuan' onClick={toggleContent} className={!showDeskripsi ? 'active' : ''}>Tujuan</h2>
                    </div>
                    
                    {showDeskripsi ? (
                    <div className="CP-deskripsi-content">
                        <p>Competitive Programming adalah sebuah kegiatan penyelesaian masalah (problem solving) tertentu menggunakan program komputer dengan mengedepankan algoritma yang paling optimal. Competitive Programming membutuhkan kemampuan logika, matematika dan algoritma yang baik untuk menyelesaikan masalah-masalah yang diberikan.</p>
                    </div>
                    ) : (

                    <div className="CP-tujuan-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae feugiat leo. Sed nec luctus elit. In hac habitasse platea dictumst. Vestibulum ac lacus ut enim euismod aliquet. Nunc suscipit nibh a dui hendrerit finibus.
                        <br/>
                        <br/>Harapannya di komunitas ini, peserta komunitas dapat menerapkan ilmunya untuk menyelesaikan masalah dan dapat mempersiapkan peserta komunitas untuk mengikuti lomba, seperti di Joints UGM, Find-IT UGM, Compfest (Data Science Academy), bahkan Gemastik.
                        </p>
                    </div> 
                    )}

                    <div className="CP-prestasi-container">
                        <div className="CP-prestasi-header">
                            <h2>PRESTASI</h2>
                        </div>
                        <div className="CP-prestasi-content">
                            <h3>Coming Soon!</h3>
                        </div>
                    </div>
                </div>

                <ImageSlider slides={slides} />

                <div className="CP-narahubung-container"> 
                    <div className="CP-narahubung-header">
                        <h2>NARAHUBUNG</h2>
                    </div>
                    <div className="CP-narahubung-content">
                        <h3>Muhammad Zahran</h3>
                        <h3>Whatsapp: 081370497856</h3>
                    </div>
                </div>
            </div>
        </section>

      <Footer />
    </div>
  );
};

export default CP;
