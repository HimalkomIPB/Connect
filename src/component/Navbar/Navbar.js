import React, { useState } from 'react'
import himalkom from '../../Assets/Himalkom/Logo HIMALKOM.svg'
import NavCross from '../../Assets/Navbar Icon/nav-Close.svg'
import nav_facebook from '../../Assets/Navbar Icon/nav_facebook.svg'
import nav_instagram from '../../Assets/Navbar Icon/nav_instagram.svg'
import nav_twitter from '../../Assets/Navbar Icon/nav_twitter.svg'
import nav_youtube from '../../Assets/Navbar Icon/nav_youtube.svg'
import navBurger from '../../Assets/Navbar Icon/nav_burger.svg'
import './Navbar.css'
const Navbar = () => {

    const [Active, setActive] = useState(false)
    const activeState = () => {
        setActive(!Active)
    }

    return (
        <div>
            <div className="navbar">
                <div className="navbar-heading">
                    <img src={himalkom} alt='himalkom' />
                </div>
                {/* Mobile Nav */}
                <div className="navbar-state" onClick={activeState}>
                    <div className={Active ? "navbar-burger" : ""}>
                        <img className='burger' src={navBurger}/>
                    </div>
                </div>

                <div className="navbar-list">
                    <li><a href="/">Home</a></li>
                    <div className="profil-dropdown">
                        <li><a href="/ProfilHimalkom">Profil</a></li>
                        <div className="sub-menu-1">
                            <li><a href="/ProfilHimalkom">Himalkom</a></li>
                            <div className="divisi-dropdown">
                                <li>Divisi</li>
                                <div className="sub-menu-2">
                                    <li><a href='/Badan-Pengawas'>BP</a></li>
                                    <li><a href='/BPH'>BPH</a></li>
                                    <li><a href='/Edukasi'>Edukasi</a></li>
                                    <li><a href='/Eksternal'>Eksternal</a></li>
                                    <li><a href='/HRD'>HRD</a></li>
                                    <li><a href='/Internal'>Internal</a></li>
                                    <li><a href='/Media-Branding'>Media dan Branding</a></li>
                                    <li><a href='/Riset-Teknologi'>Riset dan Teknologi</a></li>
                                    <li><a href='/Entrepreneur'>Entrepreneur</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li><a href="/Komnews">Komnews</a></li>
                    <li><a href="/Galeri">Galeri</a></li>
                    <li><a href="/Megaproker">Program Kerja</a></li>
                    <li><a href="/Ilkommunity">Komunitas</a></li>
                    <li><a href="/Riset-Himalkom">Riset</a></li>
                </div>


            </div>
            {
                Active == true
                    ?
                    <section className='mobile-navbar-container'>
                        <div className={Active ? "cross-active" : "navbar-cross"}>
                            <img src={himalkom} alt='himalkom' />
                            <img id='navcross' src={NavCross} onClick={activeState} />
                        </div>
                        <div className={Active ? "mobile-navbar" : " "}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/ProfilHimalkom">Profil</a></li>
                            <li><a href="/ProfilHimalkom">Himalkom</a></li>
                            <li><a href="/Komnews">Komnews</a></li>
                            <li><a href="/Galeri">Galeri</a></li>
                            <li><a href="/Megaproker">Program Kerja</a></li>
                            <li><a href="/Ilkommunity">Komunitas</a></li>
                            <li><a href="/Riset-Himalkom">Riset</a></li>
                        </div>
                        <div className="mobile-icon-container">
                            <div className="mobile-icon">
                                <a href="#">
                                    <img src={nav_facebook} />
                                </a>
                                <a href="#">
                                    <img src={nav_instagram} />
                                </a>
                                <a href="#">
                                    <img src={nav_twitter} />
                                </a>
                                <a href="#">
                                    <img src={nav_youtube} />
                                </a>
                            </div>
                            <div className="mobile-copyright">
                                <h2>Copyright © Himalkom 2022.</h2>
                            </div>
                        </div>
                    </section>
                    :
                    <div className={Active ? "" : ""}>
                    </div>
            }
        </div>
    )
}

export default Navbar
