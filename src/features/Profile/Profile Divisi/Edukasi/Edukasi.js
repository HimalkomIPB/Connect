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
                        <div className="anggota-1">
                            <img src={anggota1} alt="Faiz Byputra" />
                        </div>
                        <div className="anggota-2">
                            <img src={anggota2} alt="Andika Risky Sururi" />
                        </div>
                        <div className="anggota-3">
                            <img src={anggota3} alt="Dhianita Shafa" />
                        </div>
                        <div className="anggota-4">
                            <img src={anggota4} alt="Ester Bina br Damanik" />
                        </div>
                        <div className="anggota-5">
                            <img src={anggota5} alt="Farhan Nurohman" />
                        </div>
                        <div className="anggota-6">
                            <img src={anggota6} alt="Halida Fiadnin" />
                        </div>
                        <div className="anggota-7">
                            <img src={anggota7} alt="M Giyas Wisnu" />
                        </div>
                        <div className="anggota-8">
                            <img src={anggota8} alt="Khansa Nabila" />
                        </div>
                        <div className="anggota-9">
                            <img src={anggota9} alt="Muhammad Zahran" />
                        </div>
                        <div className="anggota-10">
                            <img src={anggota10} alt="Raisya Shinta Siregar" />
                        </div>
                        <div className="anggota-11">
                            <img src={anggota11} alt="Syifa Adawaiyah" />
                        </div>
                    </div>
            </section>


            {/* Program Kerja */}







            <Footer />
        </div>
    );
}

export default Edukasi