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
                    <li><a href="/">Home</a></li>
                    <li><a href="/ProfilHimalkom">Profil</a></li>
                    <li><a href="/Komnews">Komnews</a></li>
                    <li><a href="/Galeri">Galeri</a></li>
                    <li><a href="/Megaproker">Program Kerja</a></li>
                    <li><a href="/Ilkommunity">Komunitas</a></li>
                    <li><a href="/Riset">Riset</a></li>
                    <li><a href="/Placeholder">Placeholder</a></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
