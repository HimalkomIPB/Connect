import React from 'react'
import { useState } from 'react'
import './Agribot.css'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'

const Agribot = () => {
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
                <div id="Agribot-header-container">
                    <div className="Agribot-header-wrapper">
                        <div className="Agribot-header">
                            <h2>Agribot</h2>
                            <p>Agribot merupakan komunitas yang mewadahi mahasiswa dalam mengembangkan minatnya yang berfokus pada pengembangan dan penerapan teknologi dalam bidang robotik.<br/>
                                <br/>
                                Setiap Rabu pukul 19:00 di Localhost (FMIPA lantai 4)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="Agribot-main-container">
                    <div className="Agribot-content-container">
                        <div className="Agribot-content-deskripsi-tujuan">
                            <h2 id='Agribot-deskripsi'
                                onClick={handleClick}
                                className={renderDiv ? "Agribot-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='Agribot-tujuan'
                                onClick={handleClick}
                                className={!renderDiv ? "Agribot-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            renderDiv == true
                                ? //if true
                                <div className="Agribot-deskripsi-content">
                                    <p>Agribot merupakan komunitas robotik mahasiswa Ilmu Komputer IPB yang telah berdiri sejak tahun 2014. Kegiatan komunitas robotika ini berfokus pada pengembangan sistem tertanam dan juga pada bidang robotika. Komunitas ini juga bergerak dalam hal-hal yang terkait kecerdasan buatan, machine learning, dan pengembangan decision support system. Komunitas ini diperuntukkan untuk semua mahasiswa aktif ilmu komputer IPB beserta mahasiswa lain yang tertarik dengan tujuan komunitas ini. Mulai tahun 2016, sesuai dengan semangat IPB membentuk Unit Kegiatan Mahasiswa Robotika, komunitas ini mulai menjalin kerja sama dengan mahasiswa dari Departemen Teknik Mesin dan Biosistem serta Departemen Fisika.
                                    </p>
                                </div>
                                : //else
                                < div >
                                    <div className="Agribot-tujuan-container">
                                        <div className="Agribot-tujuan-content">
                                            <li>Mewadahi minat mahasiswa Ilmu Komputer IPB di bidang pengembangan robotik,</li>
                                            <li>Menghasilkan robot yang memiliki dampak baik terhadap masyarakat dan institusi,</li>
                                            <li>Memfasilitasi pelatihan robotik bagi Ilmu Komputer dan mahasiswa IPB.</li>
                                        </div>
                                    </div>
                                </div>
                        }

                        <div className="Agribot-prestasi-container">
                            <div className="Agribot-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="Agribot-prestasi-content">
                                <li>Best Team - IoT Motor Creation 2019</li>
                                <li>Juara 2 - IoT Aplication Competition Inter University 2016</li>
                            </div>
                        </div>
                    </div>

                    {/* <div className="Agribot-dokumentasi-container">
                        <div className="Agribot-dokumentasi-header">
                            <h2>DOKUMENTASI</h2>
                        </div>
                        <div className="Agribot-dokumentasi-content">
                            <div className="Agribot-dokumentasi-head">
                                <img src={arrowleft } alt="" className='arrow-left'/>
                                <img src={dokum} alt="placeholder" className='Agribot-main-pic'/>
                                <img src={ arrowright} alt="" className='arrow-right'/>
                            </div>
                            <div className="Agribot-dokumentasi-carousel">

                            </div>
                        </div>
                    </div> */}

                    <ImageSlider slides={slides} />

                    <div className="Agribot-narahubung-container">
                        <div className="Agribot-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="Agribot-narahubung-content">
                            <h3>Ismy Fana Fillah</h3>
                            <h3>Whatsapp: 082322632462</h3>                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Agribot