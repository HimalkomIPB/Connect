import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Ristek.css'
import line from './../../../.././Assets/Divisi/Ristek/line.svg'
import anggota1 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-ariq.png'
import anggota2 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-giras.png'
import anggota3 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-ayyas.png'
import anggota4 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-althaf.png'
import anggota5 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-mumtaz.png'
import anggota6 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-rifqi.png'
import anggota7 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-khalid.png'
import anggota8 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-irfan.png'
import { useState } from "react";




const proker_ristek = [
    {
        title: 'Riset Ilkomerz',
        description: 'Kegiatan riset yang dilakukan dengan mengedepankan prinsip-prinsip riset dan data yang faktual sehingga dapat memahami permasalahan serta kebutuhan dari mahasiswa Ilmu Komputer.'
    },
    {
        title: 'Website Himalkom',
        description: 'Mengelola dan mengembangkan website Himalkom.'
    }
]


const Ristek = () => {
    const [selected, setSelected] = useState(null)

    const toggleClick = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (<div>
        <Navbar />

        {/* deskripsi divisi */}
        <section className="divisi-ristek">
            <div className="ristek-container">
                <div className="logo-container-ristek">
                    <br />
                </div>

                <div className="desc-ristek">
                    <h2>RISET DAN TEKNOLOGI</h2>
                    <p>Ristek merupakan badan yang bertugas untuk melaksanakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi mahasiswa untuk membangun Himalkom, serta melakukan pengembangan pada website Himalkom.</p>
                </div>
            </div>
        </section>


        {/* Staff */}
        <section className="staff">
            <div className="staff-header">
                <h2>STAFF</h2>
                <img src={line} alt="line" />
            </div>
            <div className="ristek-anggota">
                <div className="anggota-divisi">
                    <img src={anggota1} alt="Ariq Rizki Fadhillah L" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota2} alt="Giras Arya Ichsani" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota3} alt="Ayyas Mumtaz Y" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota4} alt="Althaf Nadawir T" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota5} alt="M Mumtaz Sakho" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota6} alt="Rifqi Fauzan A" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota7} alt="Khalid Zia Rabbani" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota8} alt="M Irfan Abdillah" />
                </div>
            </div>

            {/* Program Kerja */}
            <div className="ristek-program">
                <div className="program-header">
                    <h2>PROGRAM KERJA</h2>
                    <img src={line} alt="line" />
                </div>
                <div className="ristek-accordion-container">
                    <div className="ristek-accordion-wrapper">
                        {
                            proker_ristek.map((proker, i) => (
                                <div className="ristek-item">
                                    <div className={selected === i ? "ristek-proker-title active" : "ristek-proker-title"} onClick={() => toggleClick(i)}>
                                        <h2>
                                            {proker.title}
                                        </h2>
                                        <span>
                                            {selected === i ? '-' : "+"}
                                        </span>
                                    </div>
                                    <div className={selected === i ? "ristek-proker-desc show" : "ristek-proker-desc"}>
                                        <p>
                                            {proker.description}
                                        </p>
                                    </div>
                                </div>)
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>);
}

export default Ristek;