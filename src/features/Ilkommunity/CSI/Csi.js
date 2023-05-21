import React from 'react'
import './Csi.css'
import arrowleft from './../../../Assets/Ilkommunity/IWDC/IWDC-Arrow - Left Circle.svg'
import arrowright from './../../../Assets/Ilkommunity/IWDC/IWDC- Arrow - Right Circle.svg'
import dokum from './../../../Assets/Ilkommunity/CSI/dokum1.svg'

import placeholder from './../../../Assets/Divisi/BP/logo_bp.png'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'

const Csi = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="Csi-header-container">
                    <div className="Csi-header-wrapper">
                        <div className="Csi-header">
                            <h2>Agribot</h2>
                            <p>Cyber Security IPB (CSI) adalah komunitas yang bergerak pada bidang keamanan siber <br/>
                            <br/>Setiap Jumat pukul 17:00 di gedung Gedung Pusat Komputer (GPK)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="Csi-main-container">
                    <div className="Csi-content-container">
                        <div className="Csi-content-deskripsi-tujuan">
                            <h2 id='Csi-deskripsi'>Deskripsi</h2>

                            <h2 id='Csi-tujuan'>Tujuan</h2>
                        </div>
                        <div className="Csi-deskripsi-content">
                            <p>Komunitas Cyber Security IPB merupakan komunitas yang memfasilitasi mahasiswa IPB yang memiliki minat atau ketertarikan terhadap bidang Keamanan Jaringan. Komunitas ini mempelajari mulai dari metodologi “hacking”, eksploitasi web application hingga low-level application, serta keahlian-kahlian dasar keamanan jaringan.<br/>
                            <br/>Harapannya di komunitas ini, peserta komunitas dapat menerapkan ilmunya untuk menyelesaikan masalah dan dapat mempersiapkan peserta komunitas untuk mengikuti lomba-lomba terkait serta mempersiapkan peserta untuk pratisipasi aktif dalam bug bounty.
                            </p>
                        </div>

                        <div className="Csi-prestasi-container">
                            <div className="Csi-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="Csi-prestasi-content">
                                <li>Juara 3 Cabang Keamanan Jaringan dan Sistem Informasi GEMASTIK IX</li>
                                <li>Juara 1 & 3 JOINTS UGM 2018 - CTF</li>
                                <li>Juara 3 Compfest X - CTF</li>
                            </div>
                        </div>
                    </div>

                    <div className="Csi-dokumentasi-container">
                        <div className="Csi-dokumentasi-header">
                            <h2>DOKUMENTASI</h2>
                        </div>
                        <div className="Csi-dokumentasi-content">
                            <div className="Csi-dokumentasi-head">
                                <img src={arrowleft } alt="" className='arrow-left'/>
                                <img src={dokum} alt="placeholder" className='Csi-main-pic'/>
                                <img src={ arrowright} alt="" className='arrow-right'/>
                            </div>
                            <div className="Csi-dokumentasi-carousel">

                            </div>
                        </div>
                    </div>

                    <div className="Csi-narahubung-container">
                        <div className="Csi-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="Csi-narahubung-content">
                            <h3>Irfan Alamsyah</h3>
                            <h3>Whatsapp: 089604283143</h3>                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Csi