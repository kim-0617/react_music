import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoveContext } from "../context/MoveContext";

const moodList = [
  "밝은",
  "경쾌한",
  "상큼한",
  "귀여운",
  "코믹한",
  "로맨틱",
  "희망찬",
  "웅장한",
  "발랄한",
];
function Mood() {
  const { setMoving, setKeyword } = useContext(MoveContext);

  const onActive = (e) => {
    if (e.target.tagName === "A") {
      setMoving(true);
      setKeyword(e.target.textContent.replace("# ", "").concat("분위기"));
      [...e.currentTarget.parentElement.children].forEach((li, index) => {
        li.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
      setMoving(false);
    }
  };

  return moodList.map((m, index) => (
    <li key={m} onClick={onActive}>
      <Link to={`/tagSearch/분위기/${m}`}># {m}</Link>
    </li>
  ));
}

export default Mood;
