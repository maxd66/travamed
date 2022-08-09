import "./Apply.css";
import Form from "../Form/Form";
import cherryBlossom from "../../images/cherryBlossom.jpg";

function Apply() {
  const backgroundImgStyling = {
    backgroundImage: `url(${cherryBlossom})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div id="applyContainer">
      <div id="applyHeader">
        <h2>Your Best Life</h2>
        <h2>Starts Here</h2>
      </div>
      <div id="applyFlex">
        <div id="whiteStrip">
          <div id="greenStrip" style={backgroundImgStyling}>
            <div id="formCard">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
