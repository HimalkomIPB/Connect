import React, { useState } from "react";
import "./CP.css";
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import Navbar from "../../../component/Navbar/Navbar";
import Footer from "../../../component/Footer/Footer";


const CP = () => {
  const [renderDiv, setrenderDiv] = useState(true);

    const handleClick = () => {
        setrenderDiv(!renderDiv)
    }

    const slides = [
        { url: "http://placehold.it/350x150" },
        { url: "http://placehold.it/255x150" },
        { url: "http://placehold.it/295x150" },
        { url: "http://placehold.it/310x150" },
        { url: "http://placehold.it/450x150" },
    ];
  return (
    <div>
      <Navbar />
      <section>
        <div id="CP-header-container">
          <div className="CP-header-wrapper">
            <div className="CP-header">
              <h2>CP</h2>
              <p>Competitive Programming IPB adalah komunitas yang bergerak pada perlombaan pemrograman kompetitif yang merupakan kompetisi menyelesaikan suatu masalah secara algoritmik.<br />
                <br />
                Setiap Senin pukul 18:45 di Localhost (FMIPA lantai 4)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
            <div id="CP-main-container">
                <div className="CP-content-container">
                    <div className="CP-content-deskripsi-tujuan">
                            <h2 id='CP-deskripsi'
                                onClick={handleClick}
                                className={renderDiv ? "CP-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='CP-tujuan'
                                onClick={handleClick}
                                className={!renderDiv ? "CP-active" : ""}>
                                Tujuan
                            </h2>
                    </div>
                    {
                      renderDiv == true
                          ? //if true
                          <div className="CP-deskripsi-content">
                              <p>Competitive Programming adalah sebuah kegiatan penyelesaian masalah (problem solving) tertentu menggunakan program komputer dengan mengedepankan algoritma yang paling optimal. Competitive Programming membutuhkan kemampuan logika, matematika dan algoritma yang baik untuk menyelesaikan masalah-masalah yang diberikan.
                              </p>
                          </div>
                          : //else
                          < div >
                              <div className="CP-tujuan-container">
                                  <div className="CP-tujuan-content">
                                  <h3>Tujuan Competitive Programming IPB adalah mendukung anggota-anggotanya untuk meraih juara pada perlombaan-perlombaan pemrograman kompetitif.</h3>
                                  </div>
                              </div>
                          </div>
                        }

                    <div className="CP-prestasi-container">
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
