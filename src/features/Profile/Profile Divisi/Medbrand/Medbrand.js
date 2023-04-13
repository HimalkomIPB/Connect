import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Medbrand.css'
import line from './../../../.././Assets/Divisi/Medbrand/line.svg'
import anggota1 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-salim.png'
import anggota2 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-dzaki.png'
import anggota3 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-previa.png'
import anggota4 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-safira.png'
import anggota5 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-khalil.png'
import anggota6 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-daffa.png'
import anggota7 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-dika.png'
import anggota8 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-fahmi.png'
import anggota9 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-faiq.png'
import anggota10 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-bima.png'
import anggota11 from './../../../../Assets/Divisi/Medbrand/Anggota/anggota-medina.png'

const Medbrand = () => {
    return (<div>
        <Navbar />

        {/* deskripsi divisi */}
        <section className="divisi-medbrand">
            <div className="medbrand-container">
                <div className="logo-container">
                    <br />
                </div>
                
                <div className="desc-medbrand">
                    <h2>MEDIA DAN BRANDING</h2>
                    <p>Mebrand merupakan badan yang bertugas untuk membuat, mengelola, dan mengoptimalkan media informasi Himalkom sebagai pusat informasi, mendokumentasikan kegiatan yang diselenggarakan oleh Himalkom, dan menjalin kerja sama dengan media partner untuk meningkatkan branding Himalkom.</p>
                </div>
            </div>
        </section>


        {/* Staff */}
        <section className="staff">
            <div className="staff-header">
                <h2>STAFF</h2>
                <img src={line} alt="line" />
            </div>
            <div className="medbrand-anggota">
                <div className="anggota-divisi">
                    <img src={anggota1} alt="M Naufal Daffa Salim" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota2} alt="Dzakiriza Dira Fridman" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota3} alt="Previa Putri Aulia" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota4} alt="Safira Kirei Nisa" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota5} alt="M Khalil Adha" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota6} alt="Daffa Noviansyah" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota7} alt="Andhika Rafi Lazuardi" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota8} alt="M Fahmi Ihsan" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota9} alt="Naufal Faiq R" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota10} alt="Tan Bima Wiragama" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota11} alt="Medina Fitri M" />
                </div>
            </div>

            {/* Program Kerja */}
            <div className="medbrand-program">
                <div className="program-header">
                    <h2>PROGRAM KERJA</h2>
                    <img src={line} alt="line"/>
                </div>
            </div>
        </section>





        <Footer />
    </div>);
}

export default Medbrand;