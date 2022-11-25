import React, { useEffect } from "react";
import { MainTop, MainBottom } from "../components";

const MainConts = () => {
  useEffect(() => {
    document
      .querySelectorAll(".header__right li")[0]
      .querySelector("a")
      .classList.remove("active");

    document
      .querySelectorAll(".header__right li")[1]
      .querySelector("a")
      .classList.remove("active");

    document
      .querySelectorAll(".header__right li")[2]
      .querySelector("a")
      .classList.remove("active");
  }, []);

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
