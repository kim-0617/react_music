import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import parser from "cheerio";
import TagBox from "./TagBox";

const MainBottom = () => {
  const [bgms, setBgms] = useState([]);
  // crwal
  const url = "https://www.sellbuymusic.com";
  useEffect(() => {
    const getHTML = async (keyword) => {
      try {
        return await axios.get(url); // encodeURI(keyword)
      } catch (error) {
        console.log(error);
      }
    };
    const parsing = async (keyword) => {
      const html = await getHTML(keyword);
      const $ = parser.load(html.data);
      const $bgmSearchList = $(".new_bgm_list_block");
      const tmp = [];
      $bgmSearchList.each((idx, node) => {
        tmp.push({
          img: url + $(node).find(".thumbs img").attr("src"),
          title: $(node).find(".song_name a").text(),
          musition: "by " + $(node).find(".musician a").text(),
          tags: $(node).find(".hash_tag a").text(),
          time: $(node).find(".time").text(),
        });
      });

      setBgms(tmp);
    };
    parsing();
  }, [url]);

  console.log(bgms);

  return (
    <section id="top__music">
      <div className="container">
        <div className="top__title">
          <div className="top__left">
            MUSIC <em>TOP</em> 10
          </div>
          <div className="top__rigth">
            <img src="./assets/img/record.png" alt="top msuic" />
          </div>
        </div>
        {/* // title */}
        <div className="top__music__list">
          <h2>Music List</h2>
          <div className="tag__music">
            {bgms.map((bgm, index) => (
              <TagBox key={bgm.title} bgm={bgm} index={index} />
            ))}
          </div>
        </div>
        {/* // cont */}
        <div className="add__link">
          <a href="/">더보기</a>
        </div>
      </div>
    </section>
  );
};

export default MainBottom;
