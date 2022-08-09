import "./About.css";
import beachImg from "../../images/beach.jpg";
import campingImg from "../../images/camping.jpg";

function About() {
  return (
    <div id="aboutContainer">
      <section className="flex-container">
        <section id="mainAbout" className="about-section">
          <h2 className="about-header">
            We Are <span className="boldHeader">Travamed</span>
          </h2>
          <p>
            A medical staffing firm, solely run by medical professionals. We are
            here to be your advocates and to help you pursue your career goals.
          </p>
        </section>
        <img id="filler1" alt="doctors in surgery" src={beachImg} />
      </section>
      <section className="flex-container">
        <img id="filler2" alt="people camping" src={campingImg} />
        <section id="subAbout" className="about-section">
          <h3 id="headerRight" className="about-header">
            <span className="boldHeader">Get More</span>
            <br></br>from Your Career
          </h3>
          <p>
            Experience the beauty of traveling the country, meeting new people,
            and making memories that will last a lifetime.
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;
