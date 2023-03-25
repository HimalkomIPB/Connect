import React from 'react'
import himalkom from '../../Assets/Himalkom/Logo HIMALKOM.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-heading">
                    <img src={himalkom} alt='himalkom'></img>
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
                    <li><a href="/Riset">Riset</a></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
