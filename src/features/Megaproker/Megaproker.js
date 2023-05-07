import React from 'react'
import './Megaproker.css'
import ittoday from '../../Assets/Logo IT Today.png'
import riset from '../../Assets/Logo Riset.png'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'

import proker_title from '../../Assets/Background/proker-title.svg'
import proker_content from '../../Assets/Background/proker-content.svg'
import proker_title1 from '../../Assets/Background/proker-title1.svg'
import proker_content1 from '../../Assets/Background/proker-content1.svg'

import proker_title2 from '../../Assets/Background/proker-title2.svg'
import proker_content2 from '../../Assets/Background/proker-content2.svg'
import proker_title22 from '../../Assets/Background/proker-title22.svg'
import proker_content22 from '../../Assets/Background/proker-content22.svg'

import logo1 from '../../Assets/Program Kerja/logo/IT_Today.svg'
import logo2 from '../../Assets/Program Kerja/logo/cpsc.svg'

import dokumimg from '../../Assets/Program Kerja/dokum/dokum.svg'


const Megaproker = () => {
    return (
        <div>
            <Navbar />
            {/* hero */}
            <section>
                <div className="megaproker-header">
                    <h1>MEGAPROKER HIMALKOM <br></br> IPB 2023/2024</h1>
                </div>  
            </section>
            
             {/* Main */}
            <section>
                <div className="megaproker-container">
            
                    <div className="megaproker-proker proker1">
                        <div className="megaproker-title">
                            <img src={proker_title} alt="proker-title" className='backgroundd bg1'/>
                            <img src={proker_title1} alt="proker-title" className='backgroundd bg11'/>
                            
                            <div className='logo-containerr'>
                                <img src={logo1} className='logo-proker'/>
                            </div>

                            <div className='txt-containerr'>
                                <h2>IT TODAY</h2>
                                <p>Prepare yourself to face rapid technology development</p>
                            </div>
                        </div>

                        <div className='megaproker-content'>
                            <img src={proker_content} alt="proker-content" className='backgroundd bg2'/>
                            <img src={proker_content1} alt="proker-content" className='backgroundd bg22'/>
                            <div className='content-containerr'>
                                <h3 className='rangkaian-acara'>Rangkaian Acara</h3>
                                <div className='carousel'>
                                    <div className='box'>
                                        <img src={dokumimg}/>
                                    </div>
                                    <div className='box'>
                                        <img src={dokumimg}/>
                                    </div>
                                    <div className='box'>
                                        <img src={dokumimg}/>
                                    </div>
                                </div>

                                <h3 className='dokumentasi'>Dokumentasi Video</h3>
                                <div className='dokumentasi-video'>
                                    <box className='box'>
                                        <a href="/Megaproker"><img src={dokumimg} className='video'/></a>
                                    </box>  
                                </div>

                                <button className='button'><span className='bold'>Selengkapnya</span></button>
                            </div>
                        </div>   
                    </div>

                    <div className="megaproker-proker proker2">
                        <div className="megaproker-title">
                            <img src={proker_title2} alt="proker-title" className='backgroundd bg3'/>
                            <img src={proker_title22} alt="proker-title" className='backgroundd bg33'/>

                            
                            <div className='logo-containerr'>
                                <img src={logo2} className='logo-proker'/>
                            </div>
                            <div className='txt-containerr'>
                                <h2>CPSC</h2>
                                <p><span id='bold'>CPSC</span> merupakan salah satu cabang lomba ilmu komputer di Pesta Sains Nasional yang diselenggarakan oleh IPB</p>
                            </div>
                        </div>

                        <div className='megaproker-content'>
                            <img src={proker_content2} alt="proker-content" className='backgroundd bg4'/>
                            <img src={proker_content22} alt="proker-content" className='backgroundd bg44'/>
                            
                            <div className='content-containerr'>
                                <h3 className='rangkaian-acara'>Rangkaian Acara</h3>
                                <div className='carousel'>
                                    <div className='box'>
                                        <img src={dokumimg}/>
                                    </div>
                                    <div className='box'>
                                        <img src={dokumimg}/>
                                    </div>
                                    <div className='box'>
                                        <img src={dokumimg}/>
                                    </div>
                                </div>
                                <h3 className='dokumentasi'>Dokumentasi Video</h3>
                                <div className='dokumentasi-video'>
                                    <box className='box'>
                                        <a href="/Megaproker"><img src={dokumimg} className='video'/></a>
                                    </box>
                                </div>
                                <button className='button' ><span className='bold'>Selengkapnya</span></button>
                            </div>
                        </div>  
                        <div className='button-etc'>
                            <button className='button button-proker' id='button-etc'><span className='bold'>Proker Lainya</span></button>
                        </div>
                    </div>    
                                
                </div>
            </section>

            <section>
                <div className="Megaproker-Contact-Container">
                    <div className="Megaproker-Contact-Wrapper">
                        <div id="Megaproker-Contact-Header">
                            <h2>Narahubung</h2>
                        </div>
                        <div id="Megaproker-Contact-Person">
                            <p>08xxxxxxxxx (WhatsApp) Ariq Lubis (Kadiv Ristek)</p>
                            <p>083xxxxxxxx (WhatsApp) Irpan Bedil (PIC Riset Ilkomerz)</p>
                        </div>
                    </div>
                </div>
            </section>             
            <Footer />
        </div>
    )
}

export default Megaproker