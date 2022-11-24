import React, { useContext } from "react";
import { MoveContext } from "../context/MoveContext";

const TagSearchBar = () => {
  const { setKeyword } = useContext(MoveContext);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setKeyword(e.target.value);
    }
  };

  return (
    <div className="tag__input">
      <input
        type="text"
        placeholder="곡명/태그 등의 키워드로 검색하세요!"
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default TagSearchBar;
