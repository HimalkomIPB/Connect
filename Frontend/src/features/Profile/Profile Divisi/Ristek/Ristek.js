import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Ristek.css'
import anggota1 from './../../../../Assets/Divisi/Ristek/Anggota/Ridwan Cahya A.png'
import anggota2 from './../../../../Assets/Divisi/Ristek/Anggota/Abyan Fidriyansyah.png'
import anggota3 from './../../../../Assets/Divisi/Ristek/Anggota/M Darrel Azmi T.png'
import anggota4 from './../../../../Assets/Divisi/Ristek/Anggota/Nabil Hamzah A.png'
import anggota5 from './../../../../Assets/Divisi/Ristek/Anggota/Zara Zanneta.png'
import anggota6 from './../../../../Assets/Divisi/Ristek/Anggota/Zhafran Agus.png'
import anggota7 from './../../../../Assets/Divisi/Ristek/Anggota/Raihana Luthfia.png'
import anggota8 from './../../../../Assets/Divisi/Ristek/Anggota/Ridho Al Fath N.png'
import anggota9 from './../../../../Assets/Divisi/Ristek/Anggota/Berlin Napoleon.png'
import { useState } from "react";
import Accordion from "../../../../component/Accordion/Accordion";
import { motion } from "framer-motion";



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

    const fadeInVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: 'easeInOut',
          },
        },
      };
    return (<div>
        <Navbar />

        {/* deskripsi divisi */}
        <section className="divisi-ristek">
            <div className="ristek-container">
                <div className="logo-container-ristek">
                    <br />
                </div>

                <motion.div className="desc-ristek"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible">
                    <h2>RISET DAN TEKNOLOGI</h2>
                    <p>Ristek merupakan badan yang bertugas untuk melaksanakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi mahasiswa untuk membangun Himalkom, serta melakukan pengembangan pada website Himalkom.</p>
                </motion.div>
            </div>
        </section>


        {/* Staff */}
        <section className="stafff">
            <div className="ristek-staff-header">
                <h2>STAFF</h2>
            </div>
            <div className="ristek-anggota">
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota1} alt="Ridwan Cahya A" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota2} alt="Abyan Fidriyansyah" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota3} alt="M Darrel Azmi T" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota4} alt="Nabil Hamzah A" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota5} alt="Zara Zanneta" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota6} alt="Zhafran Agus" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota7} alt="Raihana Luthfia" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota8} alt="Ridho Al Fath N" />
                </motion.div>
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="anggota-divisi-ristek"
                >
                    <img src={anggota9} alt="Berlin Napoleon" />
                </motion.div>
                
            </div>

            {/* Program Kerja */}
            <motion.div 
                whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                transition={{duration: 0.35}}    
                className="ristek-program"
            >
               <div className="program-header-ristek">
                    <h2>PROGRAM KERJA</h2>
                </div>
                
                <Accordion proker_divisi={proker_ristek} />

            </motion.div>
        </section>
        <Footer />
    </div>);
}

export default Ristek;