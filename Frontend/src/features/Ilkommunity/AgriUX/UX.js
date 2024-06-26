import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import './UX.css'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import dokum1 from "../../../Assets/Ilkommunity/UX/UX-dokum1.png"
import dokum2 from "../../../Assets/Ilkommunity/UX/UX-dokum2.png"
import dokum3 from "../../../Assets/Ilkommunity/UX/UX-dokum3.png"
import dokum4 from "../../../Assets/Ilkommunity/UX/UX-dokum4.png"
import dokum5 from "../../../Assets/Ilkommunity/UX/UX-dokum5.png"
import dokum6 from "../../../Assets/Ilkommunity/UX/UX-dokum6.png"
import dokum7 from "../../../Assets/Ilkommunity/UX/UX-dokum7.png"
import dokum8 from "../../../Assets/Ilkommunity/UX/UX-dokum8.png"
import dokum9 from "../../../Assets/Ilkommunity/UX/UX-dokum9.png"
import dokum10 from "../../../Assets/Ilkommunity/UX/UX-dokum10.png"

const UX = () => {
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
        { url: dokum5 },
        { url: dokum6 },
        { url: dokum7 },
        { url: dokum8 },
        { url: dokum9 },
        { url: dokum10 },
    ];

    return (
        <div>
            <Navbar />
            <section>
                <div id="UX-header-container">
                    <div className="UX-header-wrapper">
                        <motion.div
                            whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
                            transition={{duration: 0.35}} 
                            className="UX-header"
                        >
                            <h2>AGRIUX</h2>
                            <p>AgriUX IPB adalah komunitas yang bergerak pada bidang UI/UX design
                                <br />
                                <br />
                                Setiap Rabu pukul 19:00
                                di RKU 2.01 (FMIPA lantai 2)
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section>
                <div id="UX-main-container">
                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}} 
                        className="UX-content-container"
                    >
                        <div className="UX-content-deskripsi-tujuan">
                            <h2 id='UX-deskripsi'
                                onClick={handleDeskripsiClick}
                                className={showDeskripsi ? "UX-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='UX-tujuan'
                                onClick={handleTujuanClick}
                                className={!showDeskripsi ? "UX-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            showDeskripsi
                                ? //if true
                                <div className="UX-deskripsi-content">
                                    <p>
                                        AgriUX merupakan komunitas yang bertujuan untuk mewadahi minat mahasiswa Ilmu Komputer dalam bidang User Interface dan User Experience pada suatu aplikasi atau web, serta minat dalam bidang desain dengan menggunakan tools desain yang beragam.
                                        <br />
                                        <br />
                                        Product Design memiliki 2 cabang, yaitu UI/UX dan Creative Design. UI/UX lebih fokus kepada problem dan penyelesaiannya serta penerapan tampilan aplikasi atau interface dengan cara melakukan wireframing, lalu pada Creative Design fokus pada pembelajar segala macam jenis desain dengan menggunakan aplikasi Adobe Illustrator, Adobe Photoshop dan lain lain.
                                    </p>
                                </div>
                                : //else
                                <div className="UX-tujuan-content">
                                    <h3>
                                        Mewadahi Mahasiswa IPB khususnya departemen Ilmu Komputer dalam menyalurkan minatnya di bidang UI/UX Design
                                    </h3>
                                </div>
                        }

                        <motion.div
                            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                            transition={{duration: 0.35}} 
                            className="UX-prestasi-container"
                        >
                            <div className="UX-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="UX-prestasi-content">
                                <li>Medali Perak Gemastik IX Cabang Desain Pengalaman Pengguna 2016</li>
                                <li>Juara 2 Samsung Ideaction 2016</li>
                                <li>Juara 2 Bidang UI/UX ITFEST USU 2017</li>
                                <li>Juara 2 UnityFest UNY cabang UX Design Competition</li>
                                <li>Medali Emas Gemastik XIII Cabang Desain Pengalaman Pengguna 2020</li>
                                <li>Juara 2 International Prototype Design Competition - Proto A Thon</li>

                            </div>
                        </motion.div>
                    </motion.div>

                    <ImageSlider slides={slides} />

                    <motion.div
                        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}} 
                        className="UX-narahubung-container"
                    >
                        <div className="UX-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="UX-narahubung-content">
                            <h3>Muhammad Raihan Zhafran Halawa</h3>
                            <h3>Whatsapp: 082260302171</h3>
                            <h3>IG: @agriux</h3>
                        </div>
                    </motion.div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default UX