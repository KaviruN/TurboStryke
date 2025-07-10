
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Services from "./pages/Services"
import { WavyBackground } from "./components/WavyBackground"

function App() {

  return (
    <div className="container">
      <WavyBackground />
      <Nav />
      <Home />
      <Services />
    </div>
  )
}

export default App
