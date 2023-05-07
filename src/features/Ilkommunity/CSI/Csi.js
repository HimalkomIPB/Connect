import React from 'react'
import './CSI.css'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'
import img from '../../../Assets/Ilkommunity/CSI 200 x 200.png'
import dokum1 from '../../../Assets/Ilkommunity/CSI/dokum1.svg';



const CSI = () => {
    return (
        <div>
            <Navbar />

            <section className="CSI">
                <div className="csi-container">
                    <div className="desc">
                        <h2>CSI IPB</h2>
                        <p>Cyber Security IPB (CSI) adalah komunitas yang bergerak pada bidang keamanan siber</p>
                    </div>

                    <div className="csi-img">
                        <img src={img} alt="CSI" />
                    </div>
                </div>
            </section>
            
            <section className='csi-body'>
                <div className='body-atas'>
                    <div className='container-box'>
                        <div className='judul-text'>Deskripsi Komunitas</div>
                        <div className='isi-text'>
                            <p>Komunitas Cyber Security IPB merupakan komunitas yang memfasilitasi mahasiswa IPB yang memiliki minat atau ketertarikan terhadap bidang Keamanan Jaringan. Komunitas ini mempelajari mulai dari metodologi “hacking”, eksploitasi web application hingga low-level application, serta keahlian-kahlian dasar keamanan jaringan.</p>
                            <p>Harapannya di komunitas ini, peserta komunitas dapat menerapkan ilmunya untuk menyelesaikan masalah dan dapat mempersiapkan peserta komunitas untuk mengikuti lomba-lomba terkait serta mempersiapkan peserta untuk pratisipasi aktif dalam bug bounty.</p>
                        </div>
                    </div>
                    <div className='container-box'>
                        <div className='judul-text'>Tujuan Komunitas</div>
                        <div className='isi-text'>
                        Tujuan dari komunitas ini adalah lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fermentum augue, sit amet convallis augue. Integer eu iaculis sem, sed euismod eros. Nulla facilisi. Proin luctus odio nunc, sed laoreet est bibendum vitae. Sed a eleifend ex. Integer varius rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula. Aliquam faucibus erat ut tincidunt cursus. Cras et ullamcorper velit. In hac habitasse platea dictumst. Nunc vitae dui quis risus elementum auctor.
                        </div>
                    </div>
                    <div className='container-box'>
                        <div className='judul-text'>Prestasi</div>
                        <div className='isi-text'>
                            <ul>
                                <li>Juara 3 Cabang Keamanan Jaringan dan Sistem Informasi GEMASTIK IX</li>
                                <li>Juara 1 & 3 JOINTS UGM 2018 - CTF</li>
                                <li>Juara 3 Compfest X - CTF</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container-box'>
                        <div className='judul-text'>Dokumentasi</div>
                    </div>
                </div>

                <div className='body-bawah'>
                    <div className='img-dokum-container'>
                        <img src={dokum1} alt='dokum1' />
                    </div>
                    <div className='img-dokum-container'>
                        <img src={dokum1} alt='dokum1' />
                    </div>
                    <div className='img-dokum-container'>
                        <img src={dokum1} alt='dokum1' />
                    </div>
                </div>
            </section>

            <section>
                <div className="Contact-Container">
                    <div className="Contact-Wrapper">
                        <div className="Contact-Header">
                            <h2>Narahubung</h2>
                        </div>
                        <div className="Contact-Person">
                            <p>08xxxxxxxxx (WhatsApp) Ariq Lubis (Kadiv Ristek)</p>
                            <p>083xxxxxxxx (WhatsApp) Irpan Bedil (PIC Riset Ilkomerz)</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default CSI