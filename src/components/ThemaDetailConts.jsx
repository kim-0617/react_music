import ThemaDetailMusic from "./ThemaDetailMusic";
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ThemaDetailConts = () => {
  const data = useContext(DataContext);

  return (
    <div className="thema__search__detail__music">
      {data.map((d, index) => (
        <ThemaDetailMusic key={d.id + index} detail={d} index={index} />
      ))}
    </div>
  );
};

export default ThemaDetailConts;
