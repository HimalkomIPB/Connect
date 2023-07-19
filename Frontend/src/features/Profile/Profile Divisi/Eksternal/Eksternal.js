import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
import './Eksternal.css'
import anggota1 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Octa.png'
import anggota2 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Made.png'
import anggota3 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Antonio.png'
import anggota4 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Eva.png'
import anggota5 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Jesslyn.png'
import anggota6 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Jihan.png'
import anggota7 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Ilham.png'
import anggota8 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Cilla.png'
import anggota9 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Maria.png'
import anggota10 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Tita.png'
import Accordion from './../../../../component/Accordion/Accordion';

const Eksternal = () => {
    const proker_eksternal = [
        {title: 'I-Talks', description: 'Acara talkshow seru bersama ILkomerz 55 yang membahas tentang persiapan memulai karir di dunia Ilmu Komputer.'},
        {title: 'I-Training', description: 'Tips & trick lolos tes seleksi kerja di perusahaan bersama Ilkomerz 55.'},
        {title: 'Webinar Series', description: 'Membahas dunia karir, tips n trick, serta teknologi yang bekerja sama dengan perusahaan-perusahaan terkait.'},
        {title: 'Expo', description: 'Expo terdiri dari career expo, scholarship expo, achievement expo, prestasi perusahaan, prestasi scholarship, performance (tarian dan nyanyian), talkshow yang diisi oleh alumni dan content creator/influencer, serta terdapat konsultasi karir.'},
        {title: 'I-Visit', description: 'Program kerja berupa kunjungan, baik dari Ilkom ke industri maupun dari industri ke Ilkom.'},
        {title: 'I-Collab', description: 'Program kerja berupa studi banding ke/dari organisasi lain, baik di dalam kampus maupun luar kampus.'},
        {title: 'LPK Tepi Sawah', description: 'Program kerja berupa pengabdian Ilkomerz mengajar anak-anak di LPK Tepi Sawah. IG : @sahabattepisawah'},
        {title: 'Partnership & Event Collaborative', description: 'Menerima dan mengelola segala macam bentuk penawaran kerja sama.'},
    ]

    return (
        <div>
            <Navbar />

            {/* Profil Divisi */}
            <section id="profil-divisi-eksternal">
                <div className="profil-container-eksternal">
                    
                    <div className="logo-container-eksternal"/>

                    <div className="info-divisi-eksternal">
                        <h1>EKSTERNAL</h1>
                        <p>Eksternal merupakan badan yang bertugas  untuk menjalin hubungan baik dengan pihak kampus meliputi alumni, perguruan tinggi lain,  ORMAWA kampus, serta  lingkungan luar kampus.</p>
                    </div>
                </div>
            </section>

            {/* staff Divisi */}
            <section id='staff-divisi-internal'>
                <div className="staff-header-internal">
                    <h2>STAFF</h2>
                </div>

                <div className="anggota-eksternal-container">
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota1} alt="Christy Octaviani H" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota2} alt="Made Althaaf" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota3} alt="Antonio" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota4} alt="Eva Fitriyaningsih" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota5} alt="Jesselyn Gowin" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota6} alt="Jihan Febriharvianti" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota7} alt="Ilham Hakim S" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota8} alt="Priscilla Nur Elia P.G" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota9} alt="Tan Maria Putri" />
                    </div>
                    <div className="anggota-divisi-eksternal">
                        <img src={anggota10} alt="Tita Madriyanti" />
                    </div>
                </div>

                {/* Program Kerja */}
                <div className="program-divisi-eksternal">
                    <div className="program-header-eksternal">
                        <h2>PROGRAM KERJA</h2>
                    </div>

                    <Accordion proker_divisi={proker_eksternal} />
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Eksternal