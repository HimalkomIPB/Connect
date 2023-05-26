import React from 'react'
import { useState } from 'react'
import './UX.css'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
const UX = () => {
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
                <div id="UX-header-container">
                    <div className="UX-header-wrapper">
                        <div className="UX-header">
                            <h2>AGRIUX</h2>
                            <p>AgriUX IPB adalah komunitas yang bergerak pada bidang UI/UX design
                                <br />
                                <br />
                                Setiap Rabu pukul 19:00
                                di RKU 2.01 (FMIPA lantai 2)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="UX-main-container">
                    <div className="UX-content-container">
                        <div className="UX-content-deskripsi-tujuan">
                            <h2 id='UX-deskripsi'
                                onClick={handleClick}
                                className={renderDiv ? "UX-active" : ""}
                            >Deskripsi
                            </h2>
                            <h2 id='UX-tujuan'
                                onClick={handleClick}
                                className={!renderDiv ? "UX-active" : ""}>
                                Tujuan
                            </h2>
                        </div>
                        {
                            renderDiv == true
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
                                < div >
                                    <div className="UX-tujuan-container">
                                        <div className="UX-tujuan-content">
                                            <h3>
                                                Mewadahi Mahasiswa IPB khususnya departemen Ilmu Komputer dalam menyalurkan minatnya di bidang UI/UX Design
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                        }

                        <div className="UX-prestasi-container">
                            <div className="UX-prestasi-header">
                                <h2>PRESTASI</h2>
                            </div>
                            <div className="UX-prestasi-content">
                                <h3>Coming Soon!</h3>
                            </div>
                        </div>
                    </div>

                    <ImageSlider slides={slides} />

                    <div className="UX-narahubung-container">
                        <div className="UX-narahubung-header">
                            <h2>NARAHUBUNG</h2>
                        </div>
                        <div className="UX-narahubung-wrapper">
                            <div className="UX-narahubung-content">
                                <h3>Raka</h3>
                                <h3>Line: irzan24</h3>
                                <h3>Whatsapp: 089513348202</h3>
                                <h3>IG: @agriux</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default UX