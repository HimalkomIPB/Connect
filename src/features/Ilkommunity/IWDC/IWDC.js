import React from 'react'
import './IWDC.css'
import arrowleft from './../../../Assets/Ilkommunity/IWDC/IWDC-Arrow - Left Circle.svg'
import arrowright from './../../../Assets/Ilkommunity/IWDC/IWDC- Arrow - Right Circle.svg'

import placeholder from './../../../Assets/Divisi/BP/logo_bp.png'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'
const IWDC = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div id="IWDC-header-container">
                    <div className="IWDC-header-wrapper">
                        <div className="IWDC-header">
                            <h2>IWDC IPB</h2>
                            <p>IWDC adalah komunitas yang berorientasi pada web development. <br />
                                <br />
                                Setiap Kamis pukul 19:30 ruangan menyesuaikan
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="IWDC-main-container">
                    <div className="IWDC-content-container">
                        <div className="IWDC-content-deskripsi-tujuan">
                            <h2 id='IWDC-deskripsi'>Deskripsi</h2>

                            <h2 id='IWDC-tujuan'>Tujuan</h2>
                        </div>
                        <div className="IWDC-deskripsi-content">
                            <p>IPB Web Development Community adalah sebuah komunitas di lingkungan mahasiswa Ilmu Komputer Institut Pertanian Bogor yang berfokus pada pembelajaran dan pengasahan kemampuan dalam pengembangan website. Semua anggota komunitas agriweb akan mempelajari segala hal yang berkaitan dengan proses pengembangan website, dimulai dari teknologi pada sisi front-end (HTML, CSS, dan Javascript), back-end (PHP, Node JS), sampai ke tools-tools yang dibutuhkan untuk mendeploy sebuah website.
                            </p>
                        </div>

                        {/* onClick -> render */}
                        {/* <div className="IWDC-tujuan-content">

                        </div> */}

                        <div className="IWDC-prestasi-container">
                            <div className="IWDC-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="IWDC-prestasi-content">
                                <h3>Coming Soon!</h3>
                            </div>
                        </div>
                    </div>

                    <div className="IWDC-dokumentasi-container">
                        <div className="IWDC-dokumentasi-header">
                            <h2>DOKUMENTASI</h2>
                        </div>
                        <div className="IWDC-dokumentasi-content">
                            <div className="IWDC-dokumentasi-head">
                                <img src={arrowleft } alt="" className='arrow-left'/>
                                <img src={placeholder} alt="placeholder" className='IWDC-main-pic'/>
                                <img src={ arrowright} alt="" className='arrow-right'/>
                            </div>
                            <div className="IWDC-dokumentasi-carousel">

                            </div>
                        </div>
                    </div>

                    <div className="IWDC-narahubung-container">
                        <div className="IWDC-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="IWDC-narahubung-content">
                            <h3>Aam</h3>
                            <h3>Whatsapp: 085155288590</h3>
                            <h3>IG: @iwdc_ipb</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default IWDC