import "./App.css";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
