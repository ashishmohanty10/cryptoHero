import React from "react";
import HomeTopSection from "./HomeTopSection";
import HomeBottomSection from "./HomeBottomSection";

const Home = () => {
  return (
    <div>
      <div className="container">
        <HomeTopSection />

        <HomeBottomSection />
      </div>
    </div>
  );
};

export default Home;
