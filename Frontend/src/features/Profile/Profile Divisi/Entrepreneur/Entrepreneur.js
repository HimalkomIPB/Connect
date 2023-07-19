import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
import './Entrepreneur.css'
import anggota1 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff1-irfan.png'
import anggota2 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff2-fatha.png'
import anggota3 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff3-nanda.png'
import anggota4 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff4-raka.png'
import anggota5 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff5-IFDHA.png'
import anggota6 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff6-nafy.png'
import anggota7 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff7-iza.png'
import anggota8 from './../../../../Assets/Divisi/Entrepreneur/Anggota/staff8-ian.png'
import Accordion from '../../../../component/Accordion/Accordion'

const Entrepreneur = () => {
    const proker_entre = [
        {title: 'Komstore', description: 'Membentuk suatu toko online di marketplace yang menjual produk makanan, merchandise Ilkom, dan barang second hand milik Ilkomerz.'},
        {title: 'Kompreneurs IPB', description: 'Program kerja yang berfokus kepada edukasi entrepreneurship. Selain edukasi, program kerja ini memiliki misi untuk membangkitkan jiwa kewirausahaan masyarakat ilkomerz.'},
        {title: 'BY-I', description: 'Bisnis marketing dari divisi entrepreneur himalkom dimana kita melakukan promosi/marketing dari sebuah produk yang ada di online shop dan mendapatkan keuntungan berupa komisi.'},
    ]

    return (
        <div>
            <Navbar />
            
            <section className='divisi-entre'>
                <div className="entre-container">
                    <div className="logo-container-entre">
                        <br />
                    </div>

                    <div className="desc-entre">
                        <h2>ENTRE<br/>
                        PRENEUR</h2>
                        <p>Divisi Entrepreneur merupakan divisi yang mengelola dana usaha guna meningkatkan pemasukan untuk menunjang kegiatan-kegiatan yang diadakan oleh HIMALKOM dari segi keuangan.</p>
                    </div>
                </div>
            </section>

            {/* staff */}
            <section className='stafff'>
                <div className="entre-staff-header">
                    <h2>STAFF</h2>
                </div>
                <div className="entre-anggota">
                    <div className="anggota-divisi-entre">
                        <img src={anggota1} alt="M Irfan Satriya D" />
                    </div>
                    <div className="anggota-divisi-entre">
                        <img src={anggota2} alt="Fatha Ariya P" />
                    </div>
                    <div className="anggota-divisi-entre">
                        <img src={anggota3} alt="Dwinanda Rizkiansyah" />
                    </div>
                    <div className="anggota-divisi-entre">
                        <img src={anggota4} alt="Raka Irzan Alfian" />
                    </div>
                    <div className="anggota-divisi-entre">
                        <img src={anggota5} alt="Ifdha'Ul Fitri" />
                    </div>
                    <div className="anggota-divisi-entre">
                        <img src={anggota6} alt="M Almal Nafy" />
                    </div>
                    <div className="anggota-divisi-entre">
                        <img src={anggota7} alt="Nismara Mayzalia" />
                    </div>
                    <div className="anggota-divisi-entre">
                        <img src={anggota8} alt="Stanislaus Brillant K.W" />
                    </div>
                </div>

                {/* Program Kerja */}
                <div className="entre-program">
                    <div className="program-header-entre">
                        <h2>PROGRAM KERJA</h2>
                    </div>

                    <Accordion proker_divisi={proker_entre} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Entrepreneur;