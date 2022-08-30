import "./App.css";
import Drugjson1 from "./components/Drugjson1";
import Drugjson2 from "./components/Drugjson2";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <p>
          Please Click on Drug 1 or Drug 2 in the Navigation Bar for Navigation
        </p>
        <Routes>
          <Route exact path="/Drug1" element={<Drugjson1 />} />
          <Route exact path="/Drug2" element={<Drugjson2 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
