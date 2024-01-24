import React from "react";
import HomeTopSection from "./HomeTopSection";
import HomeBottomSection from "./HomeBottomSection";

const Home = () => {
  return (
    <div name="home" className="py-10">
      <div className="container">
        <HomeTopSection />

        <HomeBottomSection />
      </div>
    </div>
  );
};

export default Home;
