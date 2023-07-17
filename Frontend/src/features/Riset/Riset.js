import React from 'react'
import './Riset.css';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import HeaderIcon from '../../Assets/Riset/Hero-Icon.svg';
import icon1 from '../../Assets/Riset/Riset-Icon1.svg';
import icon2 from '../../Assets/Riset/Riset-Icon2.svg';
import icon3 from '../../Assets/Riset/Riset-Icon3.svg';
import icon4 from '../../Assets/Riset/Riset-Icon4.svg';
import icon5 from '../../Assets/Riset/Riset-Icon5.svg';
import icon6 from '../../Assets/Riset/Riset-Icon6.svg';
import icon7 from '../../Assets/Riset/Riset-Icon7.svg';
import icon8 from '../../Assets/Riset/Riset-Icon8.svg';


const Riset = () => {
    return (
        <div>
            <Navbar />
            {/* hero */}
            <section>
                <div className="Riset-Header-Container">
                    <div className="Riset-Header-Wrapper">
                        <div className="Riset-Header">
                            <h2>Riset Ilkomerz</h2>
                            <p> <b>Riset Ilkomerz </b>merupakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi ilkomerz untuk membangun Himalkom berdasarkan kebutuhan ilkomerz.</p>
                        </div>
                        <div className="Riset-Icon">
                            <img src={HeaderIcon} alt="Riset icon" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main */}
            <section>
                <div className="Riset-Main-Container">
                    <div className="Riset-Main-Wrapper">
                        <div id="Riset-Main-Header">
                            <h2>RISET ILKOMERZ</h2>
                        </div>
                        <div id="Riset-Main-Column">
                            <div id="Riset">
                                <img src={icon1} alt="Riset Icon 1"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon2} alt="Riset Icon 2"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon3} alt="Riset Icon 3"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon4} alt="Riset Icon 4"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon5} alt="Riset Icon 5"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon6} alt="Riset Icon 6"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon7} alt="Riset Icon 7"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon8} alt="Riset Icon 8"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                            <div id="Riset">
                            <img src={icon1} alt="Riset Icon 1"/>
                                <h3 className='Judul-Riset'>Ketertarikan Ilkomerz dalam membangun Startup</h3> 
                                <p>23/12</p> 
                                <p><a href="#">Baca Selengkapnya</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="Riset-Contact-Container">
                    <div className="Riset-Contact-Wrapper">
                        <div id="Riset-Contact-Header">
                            <h2>Narahubung</h2>
                        </div>
                        <div id="Riset-Contact-Person">
                            <p>08xxxxxxxxx (WhatsApp) Ariq Lubis (Kadiv Ristek)</p>
                            <p>08xxxxxxxxx (WhatsApp) Ariq Lubis (Kadiv Ristek)</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Riset