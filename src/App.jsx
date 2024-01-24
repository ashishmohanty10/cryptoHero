import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import BelowFooter from "./components/BelowFooter";
import { PricingCard } from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Benefits />
      <PricingCard />
      <FAQ />
      <Contact />

      <Footer />
      <BelowFooter />
    </div>
  );
};

export default App;
