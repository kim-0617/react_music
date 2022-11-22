import React from "react";
import { Link } from "react-router-dom";

const FooterCont = () => {
  return (
    <footer id="footer">
      <div className="footer__inner container">
        <ul className="footer__left">
          <li className="footerItem list1">
            <ul>
              <li>
                <a href="/">
                  대표자 : <em>음악은 맛있음</em>
                </a>
              </li>
              <li>
                <a href="/">
                  사업자 등록번호 : <em>01020-1231-323</em>
                </a>
              </li>
              <li>
                <a href="/">
                  대표번호 : <em>010-1234-5678</em>
                </a>
              </li>
            </ul>
          </li>
          <li className="footerItem list2">
            <ul>
              <li>
                <a href="/">
                  이메일 : <em>webs@naver.com</em>
                </a>
              </li>
              <li>
                <a href="/">
                  정보제공 : <em>바로 나</em>
                </a>
              </li>
              <li>
                <a href="/">
                  정보관리자 : <em>어딘가의 바쁜 누군가</em>
                </a>
              </li>
            </ul>
          </li>
          <li className="footerItem text1">
            <a href="/">
              뮤직플레잉의 사전 서면 동의 없이 본 사이트의 일체의 정보, 콘 텐츠
              및 UI 등을 상업적 목적으로 전재, 전송, 스크래핑 등 무단 사용할 수
              없습니다.
            </a>
          </li>
          <li className="footerItem text2">
            <a href="/">Copyright ⓒ 2022 MUSIC PLAYING. All rights Reserved</a>
          </li>
        </ul>
        <div className="footer__right">
          <div className="right__text">
            <span className="target">M</span>
            <span>U</span>
            <span>S</span>
            <span>I</span>
            <span className="target space">C</span>
            <span>P</span>
            <span>L</span>
            <span className="target">A</span>
            <span>Y</span>
            <span>I</span>
            <span className="target">N</span>
            <span>G</span>
          </div>
          <div className="right__icon">
            <Link
              to="https://github.com/jwor12427"
              title="깃허브로 이동하기"
              target="_blank"
              className="github"
              rel="noreferrer"
            ></Link>
            <Link
              to="https://github.com/kim-0617"
              title="깃허브로 이동하기"
              target="_blank"
              className="github"
              rel="noreferrer"
            ></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCont;
