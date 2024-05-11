import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import './MAD.css'
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import dokum1 from '../../../Assets/Ilkommunity/MAD/MAD-dokum1.png'
import dokum2 from '../../../Assets/Ilkommunity/MAD/MAD-dokum2.png'
import dokum3 from '../../../Assets/Ilkommunity/MAD/MAD-dokum3.png'
import dokum4 from '../../../Assets/Ilkommunity/MAD/MAD-dokum4.png'
import dokum5 from '../../../Assets/Ilkommunity/MAD/MAD-dokum5.png'
import dokum6 from '../../../Assets/Ilkommunity/MAD/MAD-dokum6.png'

const MAD = () => {
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
                <div id="MAD-header-container">
                    <div className="MAD-header-wrapper">
                        <motion.div 
                            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
                            transition={{duration: 0.35}}
                            className="MAD-header"
                        >
                            <h2>MAD</h2>
                            <p>Mobile Apps Develoment (MAD) adalah komunitas berorientasi pada mobile app development. <br />
                                <br />
                                Setiap Rabu pukul 19:00 <br>
                                </br>
                                di Localhost (FMIPA lantai 4)
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section>
                <div id="MAD-main-container">
                    <motion.div 
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="MAD-content-container"
                    >
                        <div className="MAD-content-deskripsi-tujuan">
                            <h2 id='MAD-deskripsi'
                                onClick={handleDeskripsiClick}
                                className={showDeskripsi ? "mad-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='MAD-tujuan'
                                onClick={handleTujuanClick}
                                className={!showDeskripsi ? "mad-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            showDeskripsi
                                ? //if true
                                <div className="MAD-deskripsi-content">
                                    <p>Mobile Apps Development (MAD) merupakan komunitas pengembangan perangkat lunak berbasis android. Kegiatan komunitas ini berfokus pada pengembangan perangkat lunak berbasis android dari segi perencanaan, desain dan implementasi. Komunitas ini juga bergerak dalam hal-hal terkait project management, pengembangan design antarmuka yang mengacu terhadap aturan google material, percobaan dan pembelajaran berberapa development frameworks, pengenalan Android Studio dan Pengenalan database dan server. Komunitas ini diperuntukkan untuk semua mahasiswa aktif IPB.
                                    </p>
                                </div>
                                : //else
                                <div className="MAD-tujuan-content">
                                    <h3>Belajar serta membangun Mobile APP yang berkualitas, menarik, serta dapat menjadi konsumsi khalayak ramai</h3>
                                </div>
                        }

                        <motion.div 
                            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                            className="MAD-prestasi-container"
                        >
                            <div className="MAD-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="MAD-prestasi-content">
                                <li>Juara 1 Cabang Pengembangan Perangkat Lunak GEMASTIK X</li>
                                <li>Juara 1 KPU Apps Challenge Jawa Barat 2018</li>
                            </div>
                        </motion.div>
                    </motion.div>

                    <ImageSlider slides={slides} />

                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}} 
                        className="MAD-narahubung-container"
                    >
                        <div className="MAD-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="MAD-narahubung-content">
                            <h3>Muhammad Haris Sabil</h3>
                            <h3>Whatsapp: 085260033398</h3>
                        </div>
                    </motion.div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default MAD