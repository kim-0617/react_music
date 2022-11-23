import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemaSearchConts, RecomThema } from "../components";

// 위에 5개 추천 리스트
const listID = [
  "RDCLAK5uy_kT-sIJz2O-hpkxwjosN2hMt9Y5xevcPYI", // 도시감성 국내힙합
  "PLXmABVtw_j6cchM2Yg4cjo68t8LTGmfA4", // 팝송
  "PLmxVF8ick5cT0AH_EJhmXHfh68tlyx_vF", // 킬링보이스
  "PLmxVF8ick5cSdoEdME6wEjJDLs4XWSV2Z", // 세로라이브
  "PLooeWILrVByLFOm0Y4n6XSCyEOSF0piPE", // 발라드 명곡
];

// 밑에 다양한 테마별 리스트
const themaList = [
  "PLrEStZbOs90FL4mu4OCOoUbCPc377ZhkC",
  "PL_9sssGkZabgwSu9OdDtCXH8LRpCukb3o",
  "PLCPfBlvg7uWTp5N_xDluYMPP3KEBLslvX",
  "PLwAKGsGHSM5GA1ic3XuSnsOSsMX97a8_6",
  "PLvuOIp9i2KxBBOunRs55kuvIj_2oe3Jkb",
  "PL0z1nzwPWnF-1lxMrfPF0CdF80DDqr3n3",
  "PLQl7_0n9NVp3Li8PihSiqTU9-ZnZhTNcT",
  "PLsuTvhJXKcxL77K2DlaFLiNF-U1_P4Ks8",
  "PLNKPnZFkgspJFxa5ZIRb8gOAXfs8dmMXt",
  "PL61JP2cwRphussrMI_H_rzVZK1LvT7nin",
  "PLcfJIWzmQa0LCFoVL9BAt7xQBtrm0uqkk",
  "PL6I7byEh1DBnAZNIN3dlf2e2WoUNqicsx",
];

const ThemaSearch = () => {
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
