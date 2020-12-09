import React, { useEffect, useState } from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
function Navbar() {
  const [navHambuger, setNavHambugar] = useState(true);

  const handleOpenNav = () => {
    let root = document.getElementById('rootId');
    if (navHambuger) {
      root.style.animation = 'rightCloseSide 0.2s 1 linear alternate';
      setTimeout(() => {
        setNavHambugar(!navHambuger);
      }, 200);
    } else {
      setNavHambugar(!navHambuger);
    }
  };
  useEffect(() => {
    const handleOpenNav = () => setNavHambugar(true);
    window.matchMedia('(min-width:1275px').addListener(handleOpenNav);
  }, []);
  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <img
          src="https://imagedesigncustom.co.uk/assets/images/logo.png"
          alt="logo"
        />
      </div>
      {/* List navbar */}
      {/* Open Nav if navHambuger true */}
      {navHambuger && (
        <nav className="header__nav">
          <ul className="root" id="rootId">
            <li>
              <a href="#">PAINT</a>
              <div className="header__nav__submenu">
                <ul className="submenu">
                  <li>
                    <a href="#">HELMETS</a>
                  </li>
                  <li>
                    <a href="">MOTOCYCLE</a>
                  </li>
                  <li>
                    <a href="">OTHER</a>
                  </li>
                </ul>
              </div>
              <div className="header__nav__icon">
                <AddIcon />
              </div>
            </li>
            <li>
              <a href="#">SERVICES</a>
              <div className="header__nav__submenu">
                <ul className="submenu">
                  <li>
                    <a href="#">AIRBRUSHING</a>
                  </li>
                  <li>
                    <a href="">BESPOKE PAINT DESGIN</a>
                  </li>
                  <li>
                    <a href="">FABRICATION</a>
                  </li>
                  <li>
                    <a href="">GRAPICH DESGIN</a>
                  </li>
                  <li>
                    <a href="">SPECIAL EFFECTS PAINT</a>
                  </li>
                </ul>
              </div>
              <div className="header__nav__icon">
                <AddIcon />
              </div>
            </li>
            <li>
              <a href="#">LIFESTYLE</a>
              <div className="header__nav__icon">
                <AddIcon />
              </div>
            </li>
            <li>
              <a href="#">GALLERY</a>{' '}
              <div className="header__nav__icon">
                <AddIcon />
              </div>
            </li>
            <li>
              <a href="#">SHOP</a>{' '}
              <div className="header__nav__icon">
                <AddIcon />
              </div>
            </li>
            <li>
              <a href="#">ABOUT</a>{' '}
              <div className="header__nav__icon">
                <AddIcon />
              </div>
            </li>
          </ul>
        </nav>
      )}

      {/* Navbar Right */}
      <div className="header__right">
        <div className="header__right__found">
          <SearchIcon />
        </div>
        <nav className="header__right__nav">
          <ul className="rightnav">
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">FAQS</a>
            </li>
          </ul>
        </nav>
        <div className="header__right__social">
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
        </div>
      </div>
      <div
        className="header__reponsiveHambuger"
        onClick={() => {
          handleOpenNav();
        }}
      >
        <div className="header-hambuger" />
      </div>
    </header>
  );
}

export default Navbar;
