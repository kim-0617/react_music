import React, { useContext } from "react";

const SearchBar = () => {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // setArtist();
      window.location.href = `/artistSearch/${e.target.value}`;
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

export default SearchBar;
