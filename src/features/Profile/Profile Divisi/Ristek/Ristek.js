import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Ristek.css'

const Ristek = () => {
    return (<div>
        <Navbar />

        {/* deskripsi divisi */}
        <section className="divisi-ristek">
            <div className="ristek-container">
                <div className="logo-container">
                    <br />
                </div>
                
                <div className="desc-ristek">
                    <h2>RISET DAN TEKNOLOGI</h2>
                    <p>Ristek merupakan badan yang bertugas  untuk melaksanakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi mahasiswa untuk membangun Himalkom, serta melakukan pengembangan pada website Himalkom.</p>
                </div>
            </div>
        </section>






        <Footer />
    </div>);
}

export default Ristek;