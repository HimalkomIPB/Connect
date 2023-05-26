import React from 'react'
import { useState } from 'react'
import './IWDC.css'
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
const IWDC = () => {
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
                            <h2 id='IWDC-deskripsi'
                                onClick={handleClick}
                                className={renderDiv ? "iwdc-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='IWDC-tujuan'
                                onClick={handleClick}
                                className={!renderDiv ? "iwdc-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            renderDiv == true
                                ? //if true
                                < div >
                                    <div className="IWDC-tujuan-container">
                                        <div className="IWDC-tujuan-content">
                                            <h3>Belajar serta membangun WebApp yang berkualitas, menarik, serta dapat menjadi konsumsi khalayak ramai</h3>
                                        </div>
                                    </div>
                                </div>
                                : //else
                                <div className="IWDC-deskripsi-content">
                                    <p>IPB Web Development Community adalah sebuah komunitas di lingkungan mahasiswa Ilmu Komputer Institut Pertanian Bogor yang berfokus pada pembelajaran dan pengasahan kemampuan dalam pengembangan website. Semua anggota komunitas agriweb akan mempelajari segala hal yang berkaitan dengan proses pengembangan website, dimulai dari teknologi pada sisi front-end (HTML, CSS, dan Javascript), back-end (PHP, Node JS), sampai ke tools-tools yang dibutuhkan untuk mendeploy sebuah website.
                                    </p>
                                </div>
                        }

                        <div className="IWDC-prestasi-container">
                            <div className="IWDC-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="IWDC-prestasi-content">
                                <h3>Coming Soon!</h3>
                            </div>
                        </div>
                    </div>

                    <ImageSlider slides={slides} />

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
            </section >
            <Footer />
        </div >
    )
}

export default IWDC