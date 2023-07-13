import React from 'react';
import { useState } from 'react';
import './GARY.css';
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';
import ImageSlider from '../../../component/ImageSlider/ImageSlider';
import dokum1 from '../../../Assets/Ilkommunity/GARY/GARY-Dokum1.png'
import dokum2 from '../../../Assets/Ilkommunity/GARY/GARY-Dokum2.png'
import dokum3 from '../../../Assets/Ilkommunity/GARY/GARY-Dokum3.png'
import dokum4 from '../../../Assets/Ilkommunity/GARY/GARY-Dokum4.png'


const GARY = () => {
  const [showDeskripsi, setShowDeskripsi] = useState(true);

  const handleDeskripsiClick = () => {
    setShowDeskripsi(true);
  };

  const handleTujuanClick = () => {
    setShowDeskripsi(false);
  };

  const slides = [
    { url: dokum1 },
    { url: dokum2 },
    { url: dokum3 },
    { url: dokum4 }
  ];

  return (
    <div>
      <Navbar />
      <section>
        <div id="GARY-header-container">
          <div className="GARY-header-wrapper">
            <div className="GARY-header">
              <h2>GARY</h2>
              <p>
                Game Reality (Gary) adalah komunitas yang berfokus pada game development
                <br />
                <br />
                Setiap Rabu pukul 19:00 <br />
                di Localhost (FMIPA lantai 4)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="GARY-main-container">
          <div className="GARY-content-container">
            <div className="GARY-content-deskripsi-tujuan">
              <h2
                id="GARY-deskripsi"
                onClick={handleDeskripsiClick}
                className={showDeskripsi ? 'gary-active' : ''}
              >
                Deskripsi
              </h2>
              <h2
                id="GARY-tujuan"
                onClick={handleTujuanClick}
                className={!showDeskripsi ? 'gary-active' : ''}
              >
                Tujuan
              </h2>
            </div>
            {showDeskripsi ? (
              <div className="GARY-deskripsi-content">
                <p>
                  Komunitas Game Reality adalah komunitas yang berorientasi pada pengembangan permainan. Anggota komunitas di dukung untuk dapat menciptakan permainan yang berkualitas dengan memperhatikan dari segi teknik, perancangan dan grafis. Diharapkan kedepannya permainan tersebut dapat diikutkan dalam kompetisi-kompetisi dan dikomersialkan.
                </p>
              </div>
            ) : (
              <div className="GARY-tujuan-content">
                <h3>
                  Wadah pertumbuhan dan pengembangan skill dan passion dalam game development bagi mahasiswa IPB.                      </h3>
              </div>
            )}
            <div className="GARY-prestasi-container">
              <div className="GARY-prestasi-header">
                <h2>PRESTASI</h2>
              </div>
              <div className="GARY-prestasi-content">
                <ul className='GARY-Prestasi-List'>
                  <li>2nd Place Award Game Dev Competition Gemastik 9</li>
                  <li>Semi Finalist Game Category Imagine Cup 2016 Indonesia</li>
                  <li>2nd Place Award Game Category #PahlawanMuda Apps Challenge 2015</li>
                  <li>2nd Place Award Mobile Game Development Competition Technology Euphoria 2015</li>
                  <li>2nd Place Award IPB Game Dev Competition IT Today 2015</li>
                </ul>
              </div>
            </div>
          </div>

          <ImageSlider slides={slides} />

          <div className="GARY-narahubung-container">
            <div className="GARY-narahubung-header">
              <h2>NARAHUBUNG</h2>
            </div>
            <div className="GARY-narahubung-content">
              <h3>Muhammad Fahmi Ihsan</h3>
              <h3>Whatsapp: 085770699775</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GARY;
