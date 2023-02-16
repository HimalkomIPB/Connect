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
                    <li>Home</li>
                    <li>Profil</li>
                    <li>Komnews</li>
                    <li>Galeri</li>
                    <li>Program Kerja</li>
                    <li>Komunitas</li>
                    <li>Riset</li>
                </div>
            </div>
        </div>
    )
}

export default Navbar