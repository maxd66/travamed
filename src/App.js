import "./App.css";
import Main from "./components/Main/Main";
import Apply from "./components/Apply/Apply";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="parentContainer">
      <div className="content">
        <div id="staticNav">
          <Nav />
        </div>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Apply />} />
          </Routes>
        </div>
      </div>
      <div id="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
