import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoveContext } from "../context/MoveContext";

const tempoList = ["아주느림", "느림", "보통빠름", "빠름", "아주빠름"];
function Tempo() {
  const onActive = (e) => {
    if (e.target.tagName === "A") {
      setMoving(true);
      setKeyword(e.target.textContent.replace("# ", "").concat("템포"));
      [...e.currentTarget.parentElement.children].forEach((li, index) => {
        li.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
      setMoving(false);
    }
  };

  const { setMoving, setKeyword } = useContext(MoveContext);

  return tempoList.map((m, index) => (
    <li key={m} onClick={onActive}>
      <Link to={`/tagSearch/템포/${m}`}># {m}</Link>
    </li>
  ));
}

export default Tempo;
