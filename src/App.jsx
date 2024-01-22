import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import BelowFooter from "./components/BelowFooter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Benefits />

      <Footer />
      <BelowFooter />
    </div>
  );
};

export default App;
