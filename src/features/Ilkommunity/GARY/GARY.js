import React from 'react';
import { useState } from 'react';
import './GARY.css';
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';
import ImageSlider from '../../../component/ImageSlider/ImageSlider';

const GARY = () => {
    const [renderDiv, setRenderDiv] = useState(true);

  const handleClick = () => {
    setRenderDiv(!renderDiv);
  };

  const slides = [
    { url: 'http://placehold.it/350x150' },
    { url: 'http://placehold.it/255x150' },
    { url: 'http://placehold.it/295x150' },
    { url: 'http://placehold.it/310x150' },
    { url: 'http://placehold.it/450x150' },
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
                onClick={handleClick}
                className={renderDiv ? 'gary-active' : ''}
              >
                Deskripsi
              </h2>
              <h2
                id="GARY-tujuan"
                onClick={handleClick}
                className={!renderDiv ? 'gary-active' : ''}
              >
                Tujuan
              </h2>
            </div>
            {renderDiv === true ? (
              <div className="GARY-deskripsi-content">
                <p>
                Komunitas Game Reality adalah komunitas yang berorientasi pada pengembangan permainan. Anggota komunitas di dukung untuk dapat menciptakan permainan yang berkualitas dengan memperhatikan dari segi teknik, perancangan dan grafis. Diharapkan kedepannya permainan tersebut dapat diikutkan dalam kompetisi-kompetisi dan dikomersialkan.
                </p>
              </div>
            ) : (
              <div>
                <div className="GARY-tujuan-container">
                  <div className="GARY-tujuan-content">
                    <h3>Komunitas Game Reality adalah komunitas yang berorientasi pada pengembangan permainan. Anggota komunitas di dukung untuk dapat menciptakan permainan yang berkualitas dengan memperhatikan dari segi teknik, perancangan dan grafis. Diharapkan kedepannya permainan tersebut dapat diikutkan dalam kompetisi-kompetisi dan dikomersialkan.</h3>
                  </div>
                </div>
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
