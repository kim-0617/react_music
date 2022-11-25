import ThemaDetailMusic from "./ThemaDetailMusic";
import React from "react";

const ThemaDetailConts = ({ data }) => {
  // console.log("받은 데이터", data);
  return (
    <div className="thema__search__detail__music">
      {data.items.map((d, index) => (
        <ThemaDetailMusic key={d.id + index} detail={d} index={index} />
      ))}
    </div>
  );
};

export default ThemaDetailConts;
