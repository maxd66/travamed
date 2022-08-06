import "./Main.css";
import heroImg from "../../images/girlOnRock.jpg";
import About from "../About/About";

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
          <p id="subtext">Work Smarter. Travel Better</p>
        </section>
      </div>
      <About />
    </div>
  );
}

export default Main;
