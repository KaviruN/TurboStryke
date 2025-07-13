import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { WavyBackground } from "./components/WavyBackground";
import PageUP from "./components/PageUp";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import TuningOptions from "./pages/TuningOptions";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Frontend loading tasks only
        const loadingTasks = [
          // Preload images
          preloadImages(),
          // Initialize app settings
          initializeSettings(),
          // Load user preferences
          loadUserPreferences(),
        ];

        // Wait for all tasks to complete
        await Promise.all(loadingTasks);

        // Minimum loading time to show the loading screen
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Loading error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Real loading functions
  const preloadImages = () => {
    return new Promise((resolve) => {
      // Since assets are properly imported in components,
      // we just need a minimum loading time for UX
      setTimeout(resolve, 2000);
    });
  };

  const initializeSettings = () => {
    return new Promise((resolve) => {
      // Simulate settings initialization
      setTimeout(() => {
        // You can add real settings logic here
        localStorage.setItem("app_initialized", "true");
        resolve();
      }, 300);
    });
  };

  const loadUserPreferences = () => {
    return new Promise((resolve) => {
      // Simulate loading user preferences
      setTimeout(() => {
        // You can add real user preference loading here
        const preferences = localStorage.getItem("user_preferences") || "{}";
        try {
          JSON.parse(preferences);
        } catch (error) {
          console.warn("Invalid user preferences, resetting:", error);
          localStorage.setItem("user_preferences", "{}");
        }
        resolve();
      }, 300);
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WavyBackground />
                <Nav />
                <Home />
                <Footer />
                <PageUP />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <WavyBackground />
                <Nav />
                <About />
                <Footer />
                <PageUP />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <WavyBackground />
                <Nav />
                <Login />
                <Footer />
                <PageUP />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <WavyBackground />
                <Nav />
                <Register />
                <Footer />
                <PageUP />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <WavyBackground />
                <Nav />
                <Contact />
                <Footer />
                <PageUP />
              </>
            }
          />
          <Route
            path="/tuning"
            element={
              <>
                <WavyBackground />
                <Nav />
                <TuningOptions />
                <Footer />
                <PageUP />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
