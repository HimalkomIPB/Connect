import React from 'react'
import './Agribot.css'
import arrowleft from './../../../Assets/Ilkommunity/IWDC/IWDC-Arrow - Left Circle.svg'
import arrowright from './../../../Assets/Ilkommunity/IWDC/IWDC- Arrow - Right Circle.svg'
import dokum from './../../../Assets/Ilkommunity/Agribot/dokum1.svg'

import placeholder from './../../../Assets/Divisi/BP/logo_bp.png'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'

const Agribot = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="Agribot-header-container">
                    <div className="Agribot-header-wrapper">
                        <div className="Agribot-header">
                            <h2>Agribot</h2>
                            <p>Agribot adalah <br/>
                            <br/>
                            Setiap Rabu pukul 19:00 di Localhost (FMIPA lantai 4)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="Agribot-main-container">
                    <div className="Agribot-content-container">
                        <div className="Agribot-content-deskripsi-tujuan">
                            <h2 id='Agribot-deskripsi'>Deskripsi</h2>

                            <h2 id='Agribot-tujuan'>Tujuan</h2>
                        </div>
                        <div className="Agribot-deskripsi-content">
                            <p>Agribot merupakan komunitas robotik mahasiswa Ilmu Komputer IPB yang telah berdiri sejak tahun 2014. Kegiatan komunitas robotika ini berfokus pada pengembangan sistem tertanam dan juga pada bidang robotika. Komunitas ini juga bergerak dalam hal-hal yang terkait kecerdasan buatan, machine learning, dan pengembangan decision support system. Komunitas ini diperuntukkan untuk semua mahasiswa aktif ilmu komputer IPB beserta mahasiswa lain yang tertarik dengan tujuan komunitas ini. Mulai tahun 2016, sesuai dengan semangat IPB membentuk Unit Kegiatan Mahasiswa Robotika, komunitas ini mulai menjalin kerja sama dengan mahasiswa dari Departemen Teknik Mesin dan Biosistem serta Departemen Fisika.
                            </p>
                        </div>

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

                    <div className="Agribot-dokumentasi-container">
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
                    </div>

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