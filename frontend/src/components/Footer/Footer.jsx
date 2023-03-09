import "./Footer.scss";

import facebook from "../assets/images/facebook.png";
import LinkedIn from "../assets/images/LinkedIn.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import pinterest from "../assets/images/pinterest.png";
import email from "../assets/images/email.png";

// import f_logo from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_sides">
        <div className="footer-block">
          <div className="footer-left">
            <div className="f-furniture">
              <h1>F U R N I T U R E</h1>
              <a href="/">Packages</a>
              <a href="/">Living Room</a>
              <a href="/">Bedroom</a>
              <a href="/">Dining</a>
              <a href="/">Home Office</a>
              <a href="/">Decor</a>
              <a href="/">Lighting</a>
              <a href="/">Outdoor</a>
              <a href="/">All Furniture</a>
              <a href="/">Sample Sale</a>
            </div>
            <div className="f-about">
              <h1>A B O U T</h1>
              <a href="/">How it Works</a>
              <a href="/">About Feather</a>
              <a href="/">Feather Furniture</a>
              <a href="/">Reviews</a>
              <a href="/">Feather for WeWork</a>
              <a href="/">Feather for Business</a>
              <a href="/">Feather for Staging</a>
              <a href="/">Affiliate Program</a>
              <a href="/">Careers</a>
              <a href="/">In Your Area</a>
            </div>

            <div className="f-help">
              <h1>H E L P</h1>
              <a href="/">FAQs</a>
              <a href="/">Contact us</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms</a>
              <a href="/">FloorFound Terms</a>
            </div>
          </div>
          <div className="footer-right">
            <div className="feather">
              <h1>FEATHER ON SOCIAL MEDIA</h1>
              <a href="/" className="photo-item">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/" className="photo-item">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="/" className="photo-item">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/" className="photo-item">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/" className="photo-item">
                <img src={pinterest} alt="pinterest" />
              </a>
              <a href="/" className="photo-item">
                <img src={email} alt="email" />
              </a>
            </div>
            <div className="join">
              <h1>JOIN OUR NEWSLETTER</h1>
              <span></span>
            </div>
          </div>
        </div>
        {/* <div className="footer-logo">
          <img src={f_logo} alt="footer-logo" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
