import React from 'react'
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./IGallery.css"
import Card from "../../component/IGallery/IGallery_card"
import Data from "../../Data/IGallery_data"
const IGallery = () => {
  const cards = Data.map(item => {
    return (
        <Card
          title={item.title}
          category={item.category}
          desc={item.desc}
          created={item.created}
          img={item.img}
          link={item.link}
        />
    )
  })
  return (
    <div>
        <Navbar />
        <div id="IG-header-container">
            <div className="IG-header-wrapper">
                <div className="IG-header">
                    <h2>I-GALLERY</h2>
                    <p>I-Gallery adalah platform yang berisi kumpulan projek-projek yang telah dibuat oleh mahasiswa ilmu komputer. I-Gallery menampilkan projek dari setiap mata kuliah berprojek. Tujuan dari I-Gallery adalah untuk menunjukan projek yang telah dibuat oleh mahasiswa ilmu komputer.</p>
                </div>
            </div>
        </div>
        <div className='IG-main'>
          <h1>DAFTAR MATKUL</h1>
          <div className='IG-main-button'>
              <button className='IG-list'>
                <span>Semua</span>
              </button>
              <button className='IG-list' >
                <span>Basis Data</span>
              </button>
              <button className='IG-list'>
                <span>Rekayasa Perangkat Lunak</span>
              </button>
              <button className='IG-list'>
                <span>Grafika Komputer</span>
              </button>
              <button className='IG-list'>
                <span>Analisis Desain Sistem</span>
              </button>
              <button className='IG-list'>
                <span>Desain Pengalaman Pengguna</span>
              </button>
              <button className='IG-list'>
                <span>Pengolahan Citra Digital</span>
              </button>
          </div>
          <div className='IG-main-content'>
            {cards}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default IGallery