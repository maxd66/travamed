import "./Main.css";
import heroImg from "../../images/girlOnRock.jpg";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Main() {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "80%",
  };

  return (
    <div>
      <div id="hero" style={backgroundImageStyle}>
        <section id="heroText">
          <h1 id="header">Travamed</h1>
          <p id="subtext">Rewarding Careers to Build Your Future</p>
        </section>
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default Main;
