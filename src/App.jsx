import { useState } from "react";
import "./App.css";
// import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { AboutMe } from "./components/sections/AboutMe";
// Supports weights 100-900

function App() {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "} */}

      <div
        className="min-h-screen transition-opacity duration-700 
         bg-black text-gray-100"
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Experience />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
