import "./Nav.css";
import { Link } from "react-router-dom";
import heroImg from "../../images/girlOnRock.jpg";

function Nav() {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "80%",
  };
  return (
    <div id="nav-container" style={backgroundImageStyle}>
      <Link to="/">
        <h2>Logo</h2>
      </Link>
      <Link to="/form">
        <button id="contactBtn">Contact Us</button>
      </Link>
    </div>
  );
}

export default Nav;
