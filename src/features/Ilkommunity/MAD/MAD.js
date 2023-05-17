import React from 'react'
import './MAD.css'
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer'
import img from '../../../Assets/Ilkommunity/MAD 200 x 200.png'
import dokum1 from '../../../Assets/Ilkommunity/CSI/dokum1.svg';



const CSI = () => {
    return (
        <div>
            <Navbar />
            <section className="CSI">
                <div className="csi-container">
                    <div className="desc">
                        <h2>MAD</h2>
                        <p>Mobile Apps Develoment (MAD) adalah </p>
                        <p>Setiap Rabu pukul 19:00 di Localhost (FMIPA lantai 4)</p>
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
                            <p>Mobile Apps Development (MAD) merupakan komunitas pengembangan perangkat lunak berbasis android. Kegiatan komunitas ini berfokus pada pengembangan perangkat lunak berbasis android dari segi perencanaan, desain dan implementasi. Komunitas ini juga bergerak dalam hal-hal terkait project management, pengembangan design antarmuka yang mengacu terhadap aturan google material, percobaan dan pembelajaran berberapa development frameworks, pengenalan Android Studio dan Pengenalan database dan server. Komunitas ini diperuntukkan untuk semua mahasiswa aktif IPB. </p>
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
                                <li>Juara 1 Cabang Pengembangan Perangkat Lunak GEMASTIK X</li>
                                <li>Juara 1 KPU Apps Challenge Jawa Barat 2018</li>
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
                            <p>Muhammad Ikhlash</p>
                            <p>Whatsapp: 081328173266</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default CSI