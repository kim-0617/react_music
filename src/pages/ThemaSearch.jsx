import { useEffect } from "react";
import { ThemaSearchConts, RecomThema } from "../components";

// 위에 5개 추천 리스트
const listID = [
  "PLq2M9qxAw5GU2hYm-UYxCVgoI3JBTjYOs", // 2000년대 댄스곡
  "PLXmABVtw_j6cchM2Yg4cjo68t8LTGmfA4", // 팝송
  "PLCzi3FapEEFBdR4uPk8zxyMFllsUpAMiz", // 킬링벌스
  "PLmxVF8ick5cSdoEdME6wEjJDLs4XWSV2Z", // 세로라이브
  "PLy9hrh1CH_7RHTwARgga_mAr-7Duaqb7v", // 발라드 명곡
];

// 밑에 다양한 테마별 리스트
const themaList = [
  "PL_9sssGkZabgwSu9OdDtCXH8LRpCukb3o",
  "PLCPfBlvg7uWTp5N_xDluYMPP3KEBLslvX",
  "PLQl7_0n9NVp3Li8PihSiqTU9-ZnZhTNcT",
  "PLNKPnZFkgspJFxa5ZIRb8gOAXfs8dmMXt",
  "PL6I7byEh1DBnAZNIN3dlf2e2WoUNqicsx",
  // "PLrEStZbOs90FL4mu4OCOoUbCPc377ZhkC",
  // "PLsuTvhJXKcxL77K2DlaFLiNF-U1_P4Ks8",
  // "PL0z1nzwPWnF-1lxMrfPF0CdF80DDqr3n3",
];

const ThemaSearch = () => {
  useEffect(() => {
    document
      .querySelectorAll(".header__right li")[2]
      .querySelector("a")
      .classList.remove("active");

    document
      .querySelectorAll(".header__right li")[0]
      .querySelector("a")
      .classList.remove("active");

    document
      .querySelectorAll(".header__right li")[1]
      .querySelector("a")
      .classList.add("active");
  }, []);

  return (
    <section id="thema__search">
      <div className="thema__inner container">
        <h2 className="title">태마 찾기</h2>
        <article className="thema__play">
          <h3>
            플레이 리스트
            <span> 추천</span>
          </h3>
          <div className="play__inner">
            {listID.map((id, index) => (
              <RecomThema key={id + Math.random()} id={id} />
            ))}
          </div>
        </article>

        <article className="thema__bgm">
          <h3>
            <span>BGM </span>
            Playlist
          </h3>
          <p>다양한 BGM을 찾아보세요!</p>
          <div className="bgm__inner">
            {themaList.map((list, index) => (
              <ThemaSearchConts key={list} list={list} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default ThemaSearch;
