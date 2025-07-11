import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyBackground } from "./components/WavyBackground";
import PageUP from "./components/PageUp";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
          <Route path="/register" element={<Register />} />
        </Routes>
        <PageUP />
      </BrowserRouter>
    </div>
  );
}

export default App;
