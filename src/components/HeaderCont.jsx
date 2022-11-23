import React from "react";
import { Link } from "react-router-dom";

const singers = [
  "임재범",
  "김범수",
  "나얼",
  "고유진",
  "이승철",
  "하현우",
  "이수",
  "박효신",
  "김경호",
  "김연우",
  "뉴진스",
  "아이브",
  "아이들",
  "블랙핑크",
  "르세라핌",
  "에스파",
  "아이유",
  "소녀시대",
  "트와이스",
  "세븐틴",
];
export let recomSingers = [];
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  if (!recomSingers.includes(array[random])) {
    recomSingers.push(array[random]);
  }
}

while (recomSingers.length !== 10) {
  randomValueFromArray(singers);
}

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
              <Link to={`/artistSearch/${recomSingers[0]}`}>
                <em className="menu__color">아티스트</em> 검색
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderCont;
