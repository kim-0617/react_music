import React from "react";
import { Link } from "react-router-dom";

const HeaderCont = () => {
  return (
    <header id="header">
      <div className="header__wrap">
        <div className="header__left">
          <div className="logo">
            <Link to="/">
              <em className="logo__color">M</em>USI
              <em className="logo__color">C</em>
              Pl<em className="logo__color">a</em>yI
              <em className="logo__color">n</em>g
            </Link>
          </div>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <Link to="/tagSearch">
                <em className="menu__color">태그</em> 검색
              </Link>
            </li>
            <li>
              <Link to="/themaSearch">
                <em className="menu__color">테마</em> 찾기
              </Link>
            </li>
            <li>
              <a href="/artistSearch">
                <em className="menu__color">아티스트</em> 검색
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderCont;
