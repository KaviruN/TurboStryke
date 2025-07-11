import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyBackground } from "./components/WavyBackground";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <WavyBackground />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
