import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div>
      <div id="footerFlex">
        <div id="hoursSection" className="footerSection">
          <h4>Hours</h4>
          <p>Monday-Friday</p>
          <p>8am-5pm PST</p>
        </div>
        <div id="socialSection" className="footerSection">
          <h4>Socials</h4>
          <SocialIcon url="https://instagram.com/trava.med" />
        </div>
        <div id="contactSection" className="footerSection">
          <h4 id="footerHeader">Have Questions?</h4>
          <a href="/contact" id="footerLink">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
