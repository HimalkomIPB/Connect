import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Edukasi.css'
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
import Accordion from "../../../../component/Accordion/Accordion";

const proker_edukasi = [
    {
        title: "Agriinformatics",
        description: "Merupakan pengenalan komunitas Ilmu Komputer kepada civitas akademika IPB sehingga bisa menebar manfaat lebih luas"
    },
    {
        title: "Educontent",
        description: "Konten edukasi terkait hardskill ilmu komputer dan akademik, dipublikasikan di instagram Himalkom IPB"
    },
    {
        title: "Komun Upgrading Series",
        description: "Workshop seputar leadership, public speaking, dan multimedia untuk seluruh anggota komunitas"
    },
    {
        title: "Event Komunitas",
        description: "Kegiatan yang diselenggarakan oleh masing-masing komunitas dibantu oleh divisi edukasi dari sumber daya(manusia, keuangan, dsb)"
    },
    {
        title:"Jawara Gemastik",
        description: "Pembinaan insentif untuk Gemastik dalam bentuk ideation atau brainstorming, bekerja sama dengan dengan departemen dan ditmawa"
    },
    {
        title:"Tutor Ilkomerz",
        description: "Sesi tutor untuk Ilkomerz sebagai persiapan UTS dan UAS"
    },
    {
        title:"README.md",
        description: "Pojok literasi di Ilmu Komputer IPB"
    }
]


const Edukasi = () => {
    return (
        <div>
            <Navbar />

            {/* Profil Divisi */}
            <section className="edukasi-divisi">
                <div className="edukasi-container">
                    <div className="logo-container-edukasi">
                        <br />
                    </div>

                    <div className="info-edukasi">
                        <h2>EDUKASI</h2>
                        <p>Edukasi merupakan badan yang menyediakan sarana dan prasarana mahasiswa di dalam kegiatan akademik dan mengembangkan kompetensi mahasiswa.</p>
                    </div>
                </div>
            </section>


            {/* Staff Divisi */}
            <section className="edukasi-staff">
                <div className="edukasi-staff-header">
                    <h2>STAFF</h2>
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
                    <div className="edukasi-program-header">
                        <h2>PROGRAM KERJA</h2>
                    </div>
                    <Accordion proker_divisi={proker_edukasi} />
                </div>
            </section>


            <Footer />
        </div>
    );
}

export default Edukasi