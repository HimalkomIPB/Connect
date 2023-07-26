import React, { useState } from "react";
import himalkom from "../../Assets/Himalkom/Logo HIMALKOM.svg";
import NavCross from "../../Assets/Navbar Icon/nav-Close.svg";
import nav_facebook from "../../Assets/Navbar Icon/nav_facebook.svg";
import nav_instagram from "../../Assets/Navbar Icon/nav_instagram.svg";
import nav_twitter from "../../Assets/Navbar Icon/nav_twitter.svg";
import nav_youtube from "../../Assets/Navbar Icon/nav_youtube.svg";
import navBurger from "../../Assets/Navbar Icon/nav_burger.svg";
import "./Navbar.css";

import arrow_up from "./../../Assets/Profil Himalkom/arrow-up.svg";
import arrow_down from "./../../Assets/Profil Himalkom/arrow-down.svg";

const Navbar = () => {
  const [Active, setActive] = useState(false);
  const activeState = () => {
    setActive(!Active);
  };

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const toggleDropdown2 = () => {
    setIsActive2(!isActive2);
  };

  const toggleDropdown3 = () => {
    setIsActive3(!isActive3);
  };

  return (
    <div>
      <div className={`navbar ${Active ? "darken" : ""}`}>
        <div className="navbar-heading">
          <a href="/"> <img src={himalkom} alt="himalkom" /></a>
        </div>
        {/* Mobile Nav */}
        <div className="navbar-state" onClick={activeState}>
          <div className={Active ? "navbar-burger" : ""}>
            <img className="burger" src={navBurger} />
          </div>
        </div>

        <div className="navbar-list">
          <li>
            <a href="/">Home</a>
          </li>
          <div className="profil-dropdown">
            <li>
              Profil
            </li>
            <div className="sub-menu-1">
              <li>
                <a href="/ProfilHimalkom">Himalkom</a>
              </li>
              <div className="divisi-dropdown">
                <li>Divisi</li>
                <div className="sub-menu-2">
                  <li>
                    <a href="/Badan-Pengawas">BP</a>
                  </li>
                  <li>
                    <a href="/BPH">BPH</a>
                  </li>
                  <li>
                    <a href="/Edukasi">Edukasi</a>
                  </li>
                  <li>
                    <a href="/Eksternal">Eksternal</a>
                  </li>
                  <li>
                    <a href="/HRD">HRD</a>
                  </li>
                  <li>
                    <a href="/Internal">Internal</a>
                  </li>
                  <li>
                    <a href="/Media-Branding">Media dan Branding</a>
                  </li>
                  <li>
                    <a href="/Riset-Teknologi">Riset dan Teknologi</a>
                  </li>
                  <li>
                    <a href="/Entrepreneur">Entrepreneur</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="komunitas-dropdown">
              <li>Komunitas</li>
              <div className="sub-menu-3">
                <li><a href="/Ilkommunity-AgriUX">AGRIUX</a></li>
                <li><a href="/Ilkommunity-CSI">CSI</a></li>
                <li><a href="/Ilkommunity-agribot">AGRIBOT</a></li>
                <li><a href="/Ilkommunity-CP">CP</a></li>
                <li><a href="/Ilkommunity-Daming">DAMING</a></li>
                <li><a href="/Ilkommunity-IWDC">IWDC</a></li>
                <li><a href="/Ilkommunity-GARY">GARY</a></li>
                <li><a href="/Ilkommunity-MAD">MAD</a></li>
              </div>
          </div>
          <li>
            <a href="/I-Gallery">IGallery</a>
          </li>
          <li>
            <a href="/Komnews">Komnews</a>
          </li>
          <li>
            <a href="/Megaproker">Megaproker</a>
          </li>
          <li>
            <a href="/Riset-Himalkom">Riset</a>
          </li>
        </div>
        <div className={`background-overlay ${Active ? "active" : "closed"}`}></div>
      </div>

      {/* mobile nav area */}
      {Active == true ? (
        <section className="mobile-navbar-container">
          <div className={Active ? "cross-active" : "navbar-cross"}>
            <img src={himalkom} alt="himalkom" />
            <img id="navcross" src={NavCross} onClick={activeState} />
          </div>
          <div className={Active ? "mobile-navbar" : " "}>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="mobile-navbar-dropdown">
              <p onClick={toggleDropdown}>
                <a href="#">Profil</a>
                <img src={isActive ? arrow_up : arrow_down} alt="arrow" />
              </p>
              {isActive && (
                <ul className={`dropdown-menu ${isActive ? 'active' : 'inactive'}`}>
                  <li>
                    <a href="/ProfilHimalkom">Himalkom</a>
                  </li>

                  <li className="dropdown-divisi">
                    <p onClick={toggleDropdown2}>
                      <a href="#">Divisi</a>
                      <img
                        src={isActive2 ? arrow_up : arrow_down}
                        alt="arrow"
                      />
                    </p>
                    {isActive2 && (
                      <ul id="dropdown-menu-divisi" className={`dropdown-menu-divisi ${isActive2 ? 'active' : 'inactive'}`}>
                        <li>
                          <a href="/Badan-Pengawas">BP</a>
                        </li>
                        <li>
                          <a href="/BPH">BPH</a>
                        </li>
                        <li>
                          <a href="/Edukasi">Edukasi</a>
                        </li>
                        <li>
                          <a href="/Eksternal">Eksternal</a>
                        </li>
                        <li>
                          <a href="/HRD">HRD</a>
                        </li>
                        <li>
                          <a href="/Internal">Internal</a>
                        </li>
                        <li>
                          <a href="/Media-Branding">Media dan Branding</a>
                        </li>
                        <li>
                          <a href="/Riset-Teknologi">Riset dan Teknologi</a>
                        </li>
                        <li>
                          <a href="/Entrepreneur">Entrepreneur</a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/Komnews">Komnews</a>
            </li>
            <li>
              <a href="/I-Gallery">IGallery</a>
            </li>
            <li>
              <a href="/Megaproker">Megaproker</a>
            </li>
            <li className="mobile-navbar-dropdown">
              <p onClick={toggleDropdown3}>
                <a href="#">Komunitas</a>
                <img src={isActive3 ? arrow_up : arrow_down} alt="arrow"/>
              </p>
              {isActive3 && (
                <ul className={`dropdown-menu dropdown-menu-komun ${isActive3 ? 'active' : 'inactive'}`}>
                  {/* List of each community */}
                  <li><a href="/Ilkommunity-AgriUX">AGRIUX</a></li>
                  <li><a href="/Ilkommunity-CSI">CSI</a></li>
                  <li><a href="/Ilkommunity-agribot">AGRIBOT</a></li>
                  <li><a href="/Ilkommunity-CP">CP</a></li>
                  <li><a href="/Ilkommunity-Daming">DAMING</a></li>
                  <li><a href="/Ilkommunity-IWDC">IWDC</a></li>
                  <li><a href="/Ilkommunity-GARY">GARY</a></li>
                  <li><a href="/Ilkommunity-MAD">MAD</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="/Riset-Himalkom">Riset</a>
            </li>
          </div>
          <div className="mobile-icon-container">
            <div className="mobile-icon">
              <a href="https://www.facebook.com/himalkom/?locale=id_ID">
                <img src={nav_facebook} />
              </a>
              <a href="https://www.instagram.com/himalkomipb/">
                <img src={nav_instagram} />
              </a>
              <a href="https://twitter.com/HimalkomIPB">
                <img src={nav_twitter} />
              </a>
              <a href="https://www.youtube.com/@himalkomipb4653">
                <img src={nav_youtube} />
              </a>
            </div>
            <div className="mobile-copyright">
              <h2>Copyright © Himalkom 2022.</h2>
            </div>
          </div>
        </section>
      ) : (
        <div className={Active ? "" : ""}></div>
      )}
    </div>
  );
};

export default Navbar;
