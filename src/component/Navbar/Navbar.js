import React from 'react'
import himalkom from '../../Assets/Himalkom/Logo Himalkom.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-heading">
                    <img src={himalkom} alt='himalkom'></img>
                </div>
                <div className="navbar-list">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Profil">Profil</a></li>
                    <li><a href="#Komnews">Komnews</a></li>
                    <li><a href="#Galeri">Galeri</a></li>
                    <li><a href="#Program Kerja">Program Kerja</a></li>
                    <li><a href="#Komunitas">Komunitas</a></li>
                    <li><a href="#Riset">Riset</a></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
