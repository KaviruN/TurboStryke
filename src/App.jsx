import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyBackground } from "./components/WavyBackground";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Services from "./components/Services";
import About from "./pages/About";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <WavyBackground />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
