import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Benefits />
    </div>
  );
};

export default App;
