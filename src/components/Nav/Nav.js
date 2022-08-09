import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="nav-container">
      <Link to="/">
        <h2>Logo</h2>
      </Link>
      <Link to="/form">
        <button id="contactBtn">Apply Now</button>
      </Link>
    </div>
  );
}

export default Nav;
