import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <FontAwesomeIcon
              icon="fa-brands fa-facebook"
              className="text-white text-xl hover:text-sub-heading duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
