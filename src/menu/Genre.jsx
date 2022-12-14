import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoveContext } from "../context/MoveContext";

const genreList = ["댄스", "발라드", "락", "국악", "팝송", "트로트", "힙합"];
function Genre() {
  const { setMoving, setKeyword, setData } = useContext(MoveContext);

  const onActive = (e) => {
    if (e.target.tagName === "A") {
      setMoving(true);
      // setData(null);
      setKeyword(e.target.textContent.replace("# ", ""));
      [...e.currentTarget.parentElement.children].forEach((li, index) => {
        li.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
      setMoving(false);
    }
  };

  return genreList.map((m, index) => (
    <li key={m} onClick={onActive}>
      <Link to={`/tagSearch/음악장르/${m}`}># {m}</Link>
    </li>
  ));
}

export default Genre;
