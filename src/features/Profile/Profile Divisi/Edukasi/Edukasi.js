import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Edukasi.css'
import line from './../../../.././Assets/Divisi/Edukasi/line.svg'
import anggota1 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Faiz.svg'
import anggota2 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Andika.svg'
import anggota3 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Shafa.svg'
import anggota4 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Ester.svg'
import anggota5 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Farhan.svg'
import anggota6 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Halida.svg'
import anggota7 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Giyas.svg'
import anggota8 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Khansa.svg'
import anggota9 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Zahran.svg'
import anggota10 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Raisya.svg'
import anggota11 from './../../../../Assets/Divisi/Edukasi/Anggota/Anggota-Syifa.svg'



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
                    <img src={line} />
                </div>
                <div className="edukasi-anggota">
                    <div className="anggota">
                        <h2>KADIV</h2>
                        <img src={anggota1} alt="Faiz Byputra" />
                        <h2>FAIZ BYPUTRA</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota2} alt="Andika Risky Sururi" />
                        <h2>ANDIKA RISKY SURURI</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota3} alt="Dhianita Shafa" />
                        <h2>DHIANITA SHAFA</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota4} alt="Ester Bina br Damanik" />
                        <h2>ESTER BINA BR DAMANIK</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota5} alt="Farhan Nurohman" />
                        <h2>FARHAN NUROHMAN</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota6} alt="Halida Fiadnin" />
                        <h2>HALIDA FIADNIN</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota7} alt="M Giyas Wisnu" />
                        <h2>M GIYAS WISNU RIZQI</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota8} alt="Khansa Nabila" />
                        <h2>KHANSA NABILA</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota9} alt="Muhammad Zahran" />
                        <h2>MUHAMMAD ZAHRAN</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota10} alt="Raisya Shinta Siregar" />
                        <h2>RAISYA SHINTA SIREGAR</h2>
                    </div>
                    <div className="anggota">
                        <img src={anggota11} alt="Syifa Adawiyah" />
                        <h2>SYIFA ADAWIYAH</h2>
                    </div>
                </div>
                
            {/* Program Kerja */}
                <div className="edukasi-program">
                    <div className="program-header">
                        <h2>PROGRAM KERJA</h2>
                        <img src={line} />
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}

export default Edukasi