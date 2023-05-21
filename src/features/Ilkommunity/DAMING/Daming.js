import React, { useState } from "react";
import './Daming.css'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'

import arrowleft from './../../../Assets/Ilkommunity/IWDC/IWDC-Arrow - Left Circle.svg'
import arrowright from './../../../Assets/Ilkommunity/IWDC/IWDC- Arrow - Right Circle.svg'

import placeholder from './../../../Assets/Divisi/BP/logo_bp.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const DAMING = () => {
    const [showDeskripsi, setShowDeskripsi] = useState(true);
    const toggleContent = () => {
        setShowDeskripsi(!showDeskripsi);
    };

    // add slide from url online\
    const slides = [
    "http://placehold.it/350x150",
    "http://placehold.it/255x150",
    "http://placehold.it/295x150",
    "http://placehold.it/310x150",
    "http://placehold.it/450x150"
    ];


    return (
      <div>
        <Navbar />
        <section>
          <div id="DAMING-header-container">
            <div className="DAMING-header-wrapper">
              <div className="DAMING-header">
                <h2>DAMING</h2>
                <p>
                  {" "}
                  Data Mining (Daming) adalah.{" "}
                  <br />
                  <br />               
                    Setiap Rabu pukul 19:00
                    di Localhost (FMIPA lantai 4)
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section>
            <div id="DAMING-main-container">
                <div className="DAMING-content-container">
                    <div className="DAMING-content-deskripsi-tujuan">
                        <h2 id='DAMING-deskripsi' onClick={toggleContent}  className={showDeskripsi ? 'active' : ''}>Deskripsi</h2>

                        <h2 id='DAMING-tujuan' onClick={toggleContent} className={!showDeskripsi ? 'active' : ''}>Tujuan</h2>
                    </div>
                    
                    {showDeskripsi ? (
                    <div className="DAMING-deskripsi-content">
                        <p>Komunitas Data Mining merupakan komunitas yang memfasilitasi mahasiswa IPB yang memiliki minat atau ketertarikan terhadap bidang Data Science. Di Komunitas ini mempelajari bagaimana caranya suatu data dapat memberikan insight atau informasi yang tersembunyi, baik mengetahui pola ataupun memprediksi apa yang akan terjadi di masa yang akan datang.
                        <br/>
                        <br/>Harapannya di komunitas ini, peserta komunitas dapat menerapkan ilmunya untuk menyelesaikan masalah dan dapat mempersiapkan peserta komunitas untuk mengikuti lomba, seperti di Joints UGM, Find-IT UGM, Compfest (Data Science Academy), bahkan Gemastik.
                        </p>
                    </div>
                    ) : (

                    <div className="DAMING-tujuan-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae feugiat leo. Sed nec luctus elit. In hac habitasse platea dictumst. Vestibulum ac lacus ut enim euismod aliquet. Nunc suscipit nibh a dui hendrerit finibus.
                        <br/>
                        <br/>Harapannya di komunitas ini, peserta komunitas dapat menerapkan ilmunya untuk menyelesaikan masalah dan dapat mempersiapkan peserta komunitas untuk mengikuti lomba, seperti di Joints UGM, Find-IT UGM, Compfest (Data Science Academy), bahkan Gemastik.
                        </p>
                    </div> 
                    )}

                    <div className="DAMING-prestasi-container">
                        <div className="DAMING-prestasi-header">
                            <h2>PRESTASI</h2>
                        </div>
                        <div className="DAMING-prestasi-content">
                            <h3>Coming Soon!</h3>
                        </div>
                    </div>
                </div>

                <div className="DAMING-dokumentasi-container">
                    <div className="DAMING-dokumentasi-header">
                        <h2>DOKUMENTASI</h2>
                    </div>
                    <div className="DAMING-dokumentasi-content">
                        <div className="DAMING-dokumentasi-head">
                            <img src={arrowleft } alt="" className='arrow-left'/>
                            <img src="http://placehold.it/350x150" alt="placeholder" className="IWDC-main-pic" />

                            <img src={ arrowright} alt="" className='arrow-right'/>
                        </div>
                        <div className="DAMING-dokumentasi-carousel">

                        </div>
                    </div>
                </div>

                <div className="DAMING-narahubung-container"> 
                    <div className="DAMING-narahubung-header">
                        <h2>NARAHUBUNG</h2>
                    </div>
                    <div className="DAMING-narahubung-content">
                        <h3>Andika Riski Sururi</h3>
                        <h3>Whatsapp: 085694503296</h3>
                    </div>
                </div>
            </div>
        </section>

        {/* <ImageSlider slides={slides}/> */}


        <Footer />
    </div>
    );
}

export default DAMING