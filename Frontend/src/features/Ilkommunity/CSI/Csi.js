import React, { useState } from "react";
import "./Csi.css";
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import Navbar from "../../../component/Navbar/Navbar";
import Footer from "../../../component/Footer/Footer";
import dokum1 from '../../../Assets/Ilkommunity/CSI/CSI-Dokum1.png'
import dokum2 from '../../../Assets/Ilkommunity/CSI/CSI-Dokum2.png'
import dokum3 from '../../../Assets/Ilkommunity/CSI/CSI-Dokum3.png'
import dokum4 from '../../../Assets/Ilkommunity/CSI/CSI-Dokum4.png'
import dokum5 from '../../../Assets/Ilkommunity/CSI/CSI-Dokum5.png'


const CSI = () => {
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
        { url: dokum5 },
        { url: dokum4 }
    ];
    return (
        <div>
            <Navbar />
            <section>
                <div id="CSI-header-container">
                    <div className="CSI-header-wrapper">
                        <div className="CSI-header">
                            <h2>CSI</h2>
                            <p>Cyber Security IPB (CSI) adalah komunitas yang bergerak pada bidang keamanan siber dan berfokus pada kompetisi Capture the Flag (CTF) baik di tingkat nasional maupun internasional.<br />
                                <br />
                                Setiap Jumat pukul 17:00 di gedung Gedung Pusat Komputer (GPK)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id="CSI-main-container">
                    <div className="CSI-content-container">
                        <div className="CSI-content-deskripsi-tujuan">
                            <h2 id='CSI-deskripsi'
                                onClick={handleDeskripsiClick}
                                className={showDeskripsi ? "CSI-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='CSI-tujuan'
                                onClick={handleTujuanClick}
                                className={!showDeskripsi ? "CSI-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            showDeskripsi
                                ? //if true
                                <div className="CSI-deskripsi-content">
                                    <p>Komunitas Cyber Security IPB merupakan komunitas yang memfasilitasi mahasiswa IPB yang memiliki minat atau ketertarikan terhadap bidang Keamanan Jaringan. Komunitas ini mempelajari mulai dari metodologi “hacking”, eksploitasi web application hingga low-level application, serta keahlian-kahlian dasar keamanan jaringan.<br />
                                        <br />
                                        Harapannya di komunitas ini, peserta komunitas dapat menerapkan ilmunya untuk menyelesaikan masalah dan dapat mempersiapkan peserta komunitas untuk mengikuti lomba-lomba terkait serta mempersiapkan peserta untuk pratisipasi aktif dalam bug bounty.
                                    </p>
                                </div>
                                : //else
                                <div className="CSI-tujuan-content">
                                    <h3>CSI bertujuan untuk meningkatkan minat dan kesadaran terhadap keamanan siber secara luas, serta meningkatkan keterampilan keamanan siber dan hacking secara khusus.</h3>
                                </div>
                        }

                        <div className="CSI-prestasi-container">
                            <div className="CSI-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="CSI-prestasi-content">
                                <li>Juara 1 CTF FindIT! 2023</li>
                                <li>Juara 3 CTF Unity#11</li>
                                <li>Juara 1 CTF ARA 4.0</li>
                                <li>Juara 2 Gemastik XV Divisi 2 Keamanan Siber</li>
                                <li>Juara 3 Gemastik XV Divisi 2 Keamanan Siber</li>
                                <li>Juara 3 National Cyber Week 2022</li>
                                <li>Juara 3 CTF Hology 5.0</li>
                            </div>
                        </div>
                    </div>

                    <ImageSlider slides={slides} />

                    <div className="CSI-narahubung-container">
                        <div className="CSI-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="CSI-narahubung-content">
                            <h3>Irfan Alamsyah</h3>
                            <h3>Whatsapp: 089604283143</h3>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CSI;