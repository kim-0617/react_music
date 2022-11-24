import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoveContext } from "../context/MoveContext";

const themaList = ["비즈니스", "오프닝", "게임", "축하", "파티"];
function Thema() {
  const onActive = (e) => {
    if (e.target.tagName === "A") {
      setMoving(true);
      setKeyword(e.target.textContent.replace("# ", "").concat("테마"));
      [...e.currentTarget.parentElement.children].forEach((li, index) => {
        li.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
      setMoving(false);
    }
  };

  const { setMoving, setKeyword } = useContext(MoveContext);

  return themaList.map((m, index) => (
    <li key={m} onClick={onActive}>
      <Link to={`/tagSearch/테마/${m}`}># {m}</Link>
    </li>
  ));
}

export default Thema;
