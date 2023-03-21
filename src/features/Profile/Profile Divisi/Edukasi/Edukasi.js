import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Edukasi.css'
import line from './../../../.././Assets/Divisi/Edukasi/line.svg'
import anggota1 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Faiz.png'
import anggota2 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Andika.png'
import anggota3 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Shafa.png'
import anggota4 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Ester.png'
import anggota5 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Farhan.png'
import anggota6 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Halida.png'
import anggota7 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Giyas.png'
import anggota8 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Khansa.png'
import anggota9 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Zahran.png'
import anggota10 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Raisya.png'
import anggota11 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Syifa.png'



const Edukasi = () => {
    return (
        <div>
            <Navbar />

            {/* Profil Divisi */}
            <section className="edukasi-divisi">
                <div className="edukasi-container">
                    <div className="logo-container">
                        <br />
                    </div>

                    <div className="info-edukasi">
                        <h2>EDUKASI</h2>
                        <p>Edukasi merupakan badan yang menyediakan sarana dan prasarana mahasiswa di dalam kegiatan akademik dan mengembangkan kompetensi mahasiswa.</p>
                    </div>
                </div>
            </section>


            {/* Staff Divisi */}
            <section className="staff">
                <div className="staff-header">
                    <h2>STAFF</h2>
                    <img src={line} alt="line" />
                </div>
                <div className="edukasi-anggota">
                    <div className="anggota-edukasi">
                        <img src={anggota1} alt="Faiz Byputra" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota2} alt="Andika Risky Sururi" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota3} alt="Dhianita Shafa" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota4} alt="Ester Bina br Damanik" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota5} alt="Farhan Nurohman" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota6} alt="Halida Fiadnin" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota7} alt="M Giyas Wisnu" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota8} alt="Khansa Nabila" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota9} alt="Muhammad Zahran" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota10} alt="Raisya Shinta Siregar" />
                    </div>
                    <div className="anggota-edukasi">
                        <img src={anggota11} alt="Syifa Adawiyah" />
                    </div>
                </div>

                {/* Program Kerja */}
                <div className="edukasi-program">
                    <div className="program-header">
                        <h2>PROGRAM KERJA</h2>
                        <img src={line} alt="line"/>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}

export default Edukasi