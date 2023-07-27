import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import './Agribot.css'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'
import dokum1 from '../../../Assets/Ilkommunity/Agribot/Agribot-Dokum1.png'
import dokum2 from '../../../Assets/Ilkommunity/Agribot/Agribot-Dokum2.png'
import dokum3 from '../../../Assets/Ilkommunity/Agribot/Agribot-Dokum3.png'
import dokum4 from '../../../Assets/Ilkommunity/Agribot/Agribot-Dokum4.png'
import dokum5 from '../../../Assets/Ilkommunity/Agribot/Agribot-Dokum5.png'



const Agribot = () => {
    const [showDeskripsi, setShowDeskripsi] = useState(true);

    const fadeInVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5, 
            ease: 'easeOut', 
          },
        },
      };
      

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
        { url: dokum5 }
    ];

    return (
        <div>
            <Navbar />
            <section>
                <div id="Agribot-header-container">
                    <div className="Agribot-header-wrapper">
                        <motion.div 
                            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
                            transition={{duration: 0.35}}
                            className="Agribot-header"
                        >
                            <h2>Agribot</h2>
                            <p>Agribot merupakan komunitas yang mewadahi mahasiswa dalam mengembangkan minatnya yang berfokus pada pengembangan dan penerapan teknologi dalam bidang robotik.<br />
                                <br />
                                Setiap Rabu pukul 19:00 di Localhost <br />(FMIPA lantai 4)
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section>
                <div id="Agribot-main-container">
                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="Agribot-content-container"
                    >
                        <div className="Agribot-content-deskripsi-tujuan">
                            <h2 id='Agribot-deskripsi'
                                onClick={handleDeskripsiClick}
                                className={showDeskripsi ? "Agribot-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='Agribot-tujuan'
                                onClick={handleTujuanClick}
                                className={!showDeskripsi ? "Agribot-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            showDeskripsi
                                ? //if true
                                <div className="Agribot-deskripsi-content">
                                    <p>Agribot merupakan komunitas robotik mahasiswa Ilmu Komputer IPB yang telah berdiri sejak tahun 2014. Kegiatan komunitas robotika ini berfokus pada pengembangan sistem tertanam dan juga pada bidang robotika. Komunitas ini juga bergerak dalam hal-hal yang terkait kecerdasan buatan, machine learning, dan pengembangan decision support system. Komunitas ini diperuntukkan untuk semua mahasiswa aktif ilmu komputer IPB beserta mahasiswa lain yang tertarik dengan tujuan komunitas ini. Mulai tahun 2016,
                                        sesuai dengan semangat IPB membentuk Unit Kegiatan Mahasiswa Robotika,
                                        komunitas ini mulai menjalin kerja sama dengan mahasiswa dari Departemen Teknik Mesin dan Biosistem serta Departemen Fisika.
                                    </p>
                                </div>
                                : //else
                                <div className="Agribot-tujuan-content">
                                    <li>Mewadahi minat mahasiswa Ilmu Komputer IPB di bidang pengembangan robotik,</li>
                                    <li>Menghasilkan robot yang memiliki dampak baik terhadap masyarakat dan institusi,</li>
                                    <li>Memfasilitasi pelatihan robotik bagi Ilmu Komputer dan mahasiswa IPB.</li>
                                </div>
                        }

                        <motion.div
                            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                            transition={{duration: 0.35}}  
                            className="Agribot-prestasi-container"
                        >
                            <div className="Agribot-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="Agribot-prestasi-content">
                                <li>Best Team - IoT Motor Creation 2019</li>
                                <li>Juara 2 - IoT Aplication Competition Inter University 2016</li>
                            </div>
                        </motion.div>
                    </motion.div>

                    <ImageSlider slides={slides} />

                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}} 
                        className="Agribot-narahubung-container"
                    >
                        <div className="Agribot-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="Agribot-narahubung-content">
                            <h3>Ismy Fana Fillah</h3>
                            <h3>Whatsapp: 082322632462</h3>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Agribot