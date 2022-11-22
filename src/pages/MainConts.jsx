import React from "react";
import { MainTop, MainBottom } from "../components";

const MainConts = () => {
  return (
    <main id="main">
      <div className="main__wrap">
        <MainTop />
        <MainBottom />
      </div>
    </main>
  );
};

export default MainConts;
