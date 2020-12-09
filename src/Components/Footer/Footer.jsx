import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__imgAndInput">
          <div className="footer__top__imgAndInput__image">
            <img
              src="https://imagedesigncustom.co.uk/assets/images/logo.png"
              alt="logo"
            />
          </div>
          <div className="footer__top__imgAndInput__filter">
            <p>KEEP IN THE KNOW</p>
            <div className="footer__top__imgAndInput__filter__input">
              <input type="text" placeholder="ENTER YOUR EMAIL ADRESS" />
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </div>
        {/* List  */}
        <div className="footer__top__list">
          <div className="footer__top__list__left">
            <div className="footer__top__list__left__touch">
              <h1>GET IN TOUCH</h1>
              <p>Image Design Custom,</p>
              <p>Unit 7d, Bridge Rd,</p>
              <p>Camberley GU15 2QR</p>
            </div>
            <div className="footer__top__list__left__gmail">
              <p>
                <a href="#">info@imagedesigncustom.co.uk</a>
              </p>
              <p>
                <a href="#">01276 503866</a>
              </p>
            </div>
          </div>
          <div className="footer__top__list__right">
            <div className="footer__top__list__right__help rightList">
              <h1>HELP & SUPPORT</h1>
              <ul>
                <li>
                  <a href="#">Orders & Shopping</a>
                </li>
                <li>
                  <a href="#">Warranty / Returns</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="footer__top__list__right__keyPages rightList">
              <h1>KEY PAGES</h1>
              <ul>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__top__list__right__privacy rightList">
              <h1>PRIVACY</h1>
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer__top__list__right__social rightList">
              <h1>SOCIAL</h1>
              <div className="footer__top__list__right__social__items">
                <div>
                  <InstagramIcon />
                </div>
                <div>
                  <FacebookIcon />
                </div>
                <div>
                  <YouTubeIcon />
                </div>
                <div>
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© Image Design Custom 2020</p>
        <p>Website by Fathom</p>
      </div>
    </footer>
  );
}

export default Footer;
