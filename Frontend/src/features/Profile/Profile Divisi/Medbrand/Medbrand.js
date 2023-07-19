import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Medbrand.css'
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
import Accordion from "../../../../component/Accordion/Accordion";

const Medbrand = () => {
    const proker_medbrand = [
        {title: 'Upgrading', description: 'Mengadakan kegiatan workshop online tentang design, branding dan video editing untuk meningkatkan skill individu mengenai fundamental desain, video editing, dan branding'},
        {title: 'Center of Publication (COP)', description: 'Menerima request desain dari berbagai divisi Himalkom untuk dikerjakan sesuai prosedur yang ada.'},
        {title: 'Syntax', description: 'Membuat majalah tahunan yang berisi informasi seputar Himalkom IPB.'},
        {title: 'Launching Kabinet', description: 'Publikasi perkenalan kabinet, divisi, dan anggota divisi berupa feeds instagram.'},
        {title: 'Ramaikan!', description: 'Kegiatan berupa kuis berhadiah, info giveaway, dan kabar mingguan melalui instagram stories Himalkom IPB.'},
        {title: 'Skotteride', description: 'Publikasi berupa maskot, filter, dan guide pada media instagram.'},
        {title: 'Recap Proker', description: 'Recap kegiatan setiap divisi dalam rentang waktu 3-4 bulan. Setelah recap, akan ada post proker apa saja yang akan datang dalam kurun waktu 3-4 bulan ke depan.'},
    ]

    return (<div>
        <Navbar />

        {/* deskripsi divisi */}
        <section className="medbrand-divisi">
            <div className="medbrand-container">
                <div className="logo-container-medbrand">
                    <br />
                </div>
                
                <div className="info-medbrand">
                    <h2>MEDIA DAN BRANDING</h2>
                    <p>Mebrand merupakan badan yang bertugas untuk membuat, mengelola, dan mengoptimalkan media informasi Himalkom sebagai pusat informasi, mendokumentasikan kegiatan yang diselenggarakan oleh Himalkom, dan menjalin kerja sama dengan media partner untuk meningkatkan branding Himalkom.</p>
                </div>
            </div>
        </section>


        {/* Staff */}
        <section className="medbrand-staff">
            <div className="medbrand-staff-header">
                <h2>STAFF</h2>
            </div>
            <div className="medbrand-anggota">
                <div className="anggota-medbrand">
                    <img src={anggota1} alt="M Naufal Daffa Salim" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota2} alt="Dzakiriza Dira Fridman" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota3} alt="Previa Putri Aulia" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota4} alt="Safira Kirei Nisa" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota5} alt="M Khalil Adha" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota6} alt="Daffa Noviansyah" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota7} alt="Andhika Rafi Lazuardi" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota8} alt="M Fahmi Ihsan" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota9} alt="Naufal Faiq R" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota10} alt="Tan Bima Wiragama" />
                </div>
                <div className="anggota-medbrand">
                    <img src={anggota11} alt="Medina Fitri M" />
                </div>
            </div>

            {/* Program Kerja */}
            <div className="medbrand-program">
                <div className="medbrand-program-header">
                    <h2>PROGRAM KERJA</h2>
                </div>

                <Accordion proker_divisi={proker_medbrand} />
            </div>
        </section>





        <Footer />
    </div>);
}

export default Medbrand;