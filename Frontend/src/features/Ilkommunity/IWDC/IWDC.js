import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import './IWDC.css'
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import dokum1 from '../../../Assets/Ilkommunity/IWDC/iwdc-dokum1.png'
import dokum2 from '../../../Assets/Ilkommunity/IWDC/iwdc-dokum2.png'
import dokum3 from '../../../Assets/Ilkommunity/IWDC/iwdc-dokum3.png'
import dokum4 from '../../../Assets/Ilkommunity/IWDC/iwdc-dokum4.png'
import dokum5 from '../../../Assets/Ilkommunity/IWDC/iwdc-dokum5.png'
import dokum6 from '../../../Assets/Ilkommunity/IWDC/iwdc-dokum6.png'

const IWDC = () => {
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
        { url: dokum6 },
    ];

    return (
        <div>
            <Navbar />
            <section>
                <div id="IWDC-header-container">
                    <div className="IWDC-header-wrapper">
                        <motion.div 
                            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
                            transition={{duration: 0.35}}
                            className="IWDC-header"
                        >
                            <h2>IWDC</h2>
                            <p>IWDC adalah komunitas yang berorientasi pada web development. <br />
                                <br />
                                Setiap Kamis pukul 19:30 ruangan menyesuaikan
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section>
                <div id="IWDC-main-container">
                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}} 
                        className="IWDC-content-container"
                    >
                        <div className="IWDC-content-deskripsi-tujuan">
                            <h2 id='IWDC-deskripsi'
                                onClick={handleDeskripsiClick}
                                className={showDeskripsi ? "iwdc-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='IWDC-tujuan'
                                onClick={handleTujuanClick}
                                className={!showDeskripsi ? "iwdc-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            showDeskripsi
                                ? //if true
                                (
                                    <div className="IWDC-deskripsi-content">
                                        <p>IPB Web Development Community adalah sebuah komunitas di lingkungan mahasiswa Ilmu Komputer Institut Pertanian Bogor yang berfokus pada pembelajaran dan pengasahan kemampuan dalam pengembangan website. Semua anggota komunitas agriweb akan mempelajari segala hal yang berkaitan dengan proses pengembangan website, dimulai dari teknologi pada sisi front-end (HTML, CSS, dan Javascript), back-end (PHP, Node JS), sampai ke tools-tools yang dibutuhkan untuk mendeploy sebuah website.
                                        </p>
                                    </div>
                                )
                                : //else
                                (
                                    <div className="IWDC-tujuan-content">
                                        <h3>Belajar serta membangun WebApp yang berkualitas, menarik, serta dapat menjadi konsumsi khalayak ramai</h3>
                                    </div>
                                )
                        }

                        <motion.div 
                            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                            transition={{duration: 0.35}}
                            className="IWDC-prestasi-container"
                        >
                            <div className="IWDC-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="IWDC-prestasi-content">
                                <h3>Coming Soon!</h3>
                            </div>
                        </motion.div>
                    </motion.div>

                    <ImageSlider slides={slides} />

                    <motion.div 
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="IWDC-narahubung-container"
                    >
                        <div className="IWDC-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="IWDC-narahubung-content">
                            <h3>Wisnu Al Hussaeni</h3>
                            <h3>Whatsapp: 08811795084</h3>
                            <h3>IG: @iwdc_ipb</h3>
                        </div>
                    </motion.div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default IWDC