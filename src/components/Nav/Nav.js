import "./Nav.css";
import { Link } from "react-router-dom";
import travamedLogo from "../../images/travamedLogoV2.png";

function Nav() {
  return (
    <div id="nav-container">
      <Link to="/">
        <img id="logoImg" alt="mountain travamed logo" src={travamedLogo} />
      </Link>
      <Link to="/contact">
        <button id="contactBtn">Apply Now</button>
      </Link>
    </div>
  );
}

export default Nav;
