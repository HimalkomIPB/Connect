import React from 'react'
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./IGallery.css"
const IGallery = () => {
  return (
    <div>
        <Navbar />
        <section>
                <div id="IG-header-container">
                    <div className="IG-header-wrapper">
                        <div className="IG-header">
                            <h2>I-GALLERY</h2>
                            <p>I-Gallery adalah platform yang berisi kumpulan projek-projek yang telah dibuat oleh mahasiswa ilmu komputer. I-Gallery menampilkan projek dari setiap mata kuliah berprojek. Tujuan dari I-Gallery adalah untuk menunjukan projek yang telah dibuat oleh mahasiswa ilmu komputer.</p>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
    </div>
  )
}

export default IGallery