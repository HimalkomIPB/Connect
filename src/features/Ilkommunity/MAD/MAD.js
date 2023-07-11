import React from 'react'
import { useState } from 'react'
import './MAD.css'
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import dokum1 from '../../../Assets/Ilkommunity/MAD/MAD-dokum1.png'
import dokum2 from '../../../Assets/Ilkommunity/MAD/MAD-dokum2.png'
import dokum3 from '../../../Assets/Ilkommunity/MAD/MAD-dokum3.png'

const MAD = () => {
    const [showDeskripsi, setShowDeskripsi] = useState(true);

    const handleDeskripsiClick = () => {
        setShowDeskripsi(true);
    };

    const handleTujuanClick = () => {
        setShowDeskripsi(false);
    };

    const slides = [
        { url: dokum1  },
        { url: dokum2  },
        { url: dokum3  }
    ];

    return (
        <div>
            <Navbar />
            <section>
                <div id="MAD-header-container">
                    <div className="MAD-header-wrapper">
                        <div className="MAD-header">
                            <h2>MAD</h2>
                            <p>Mobile Apps Develoment (MAD) adalah komunitas berorientasi pada mobile app development. <br />
                                <br />
                                Setiap Rabu pukul 19:00 <br>
                                </br>
                                di Localhost (FMIPA lantai 4)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="MAD-main-container">
                    <div className="MAD-content-container">
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
                                < div >
                                    <div className="MAD-tujuan-container">
                                        <div className="MAD-tujuan-content">
                                            <h3>Belajar serta membangun Mobile APP yang berkualitas, menarik, serta dapat menjadi konsumsi khalayak ramai</h3>
                                        </div>
                                    </div>
                                </div>
                        }

                        <div className="MAD-prestasi-container">
                            <div className="MAD-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="MAD-prestasi-content">
                                <h3>Coming Soon!</h3>
                            </div>
                        </div>
                    </div>
                    
                    <ImageSlider slides={slides} />

                    <div className="MAD-narahubung-container">
                        <div className="MAD-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="MAD-narahubung-content">
                            <h3>Muhammad Ikhlash</h3>
                            <h3>Whatsapp: 081328173266</h3>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default MAD