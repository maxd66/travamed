import "./Apply.css";
import Form from "../Form/Form";
// import natureGuy from "../../images/natureGuy.jpg";

function Apply() {
  // const backgroundImgStyling = {
  //   backgroundImage: `url(${natureGuy})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };
  return (
    <div id="applyContainer">
      <div id="applyHeader">
        <h2>Connect With Us!</h2>
      </div>
      <div id="applyFlex">
        {/* <img id="formGraphic" alt="man near cliff at sunset" src={natureGuy} /> */}
        <div id="whiteStrip">
          <div id="greenStrip">
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
