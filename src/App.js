import "./App.css";
import Home from "./component/Home/Home.js";
import About from "./component/About/About.js";
import Pricing from "./component/Pricing/Pricing.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
