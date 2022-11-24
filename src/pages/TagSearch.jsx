import React, { useEffect, useState } from "react";
import { Loader, TagSearchBar, TagSearchBox } from "../components";
import { Link, Route, Routes } from "react-router-dom";
import { Mood, Thema, Tempo, Genre, Ins } from "../menu";
import { MoveContext } from "../context/MoveContext";
import axios from "axios";

const TagSearch = () => {
  const [moving, setMoving] = useState(false);
  const [keyword, setKeyword] = useState("분위기");
  const [data, setData] = useState(null);
  console.log("렌더링", keyword);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube-music1.p.rapidapi.com/v2/search?query=${keyword}&maxResults=10`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY3,
        "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data.result.songs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [keyword]);

  const onClickTag = (e) => {
    if (e.target.tagName === "A") {
      setMoving(true);
      [...e.currentTarget.children].forEach((li, index) => {
        li.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
      setMoving(false);
    }
  };

  if (!data) return <Loader />;

  return (
    <MoveContext.Provider value={{ setMoving, setKeyword }}>
      <section id="tag__search">
        <div className="tag__inner container">
          <h2 className="title">태그 검색</h2>

          <div className="tag__search">
            <TagSearchBar />
            <ul className="tag__list" onClick={onClickTag}>
              <li className="active">
                <Link to="/tagSearch/분위기">
                  분위기 <em>+</em>
                </Link>
              </li>
              <li>
                <Link to="/tagSearch/테마">
                  테마 <em>+</em>
                </Link>
              </li>
              <li>
                <Link to="/tagSearch/템포">
                  템포 <em>+</em>
                </Link>
              </li>
              <li>
                <Link to="/tagSearch/음악장르">
                  음악장르 <em>+</em>
                </Link>
              </li>
              <li>
                <Link to="/tagSearch/악기">
                  악기 <em>+</em>
                </Link>
              </li>
            </ul>
            {/* // tag__list */}

            <ul className="tag__list__detail">
              <Routes>
                <Route path="분위기/*" element={<Mood />} />
                <Route path="테마/*" element={<Thema />} />
                <Route path="템포/*" element={<Tempo />} />
                <Route path="음악장르/*" element={<Genre />} />
                <Route path="악기/*" element={<Ins />} />
              </Routes>
            </ul>
            {/* // tag__list__detail */}
          </div>

          <div className="search"></div>

          <div className="volume">
            <div className="bar">
              <div className="bar__btn"></div>
            </div>
          </div>

          <div className="tag__music">
            {data.map((song, index) => (
              <TagSearchBox
                key={song.id}
                keyword={keyword}
                song={song}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </MoveContext.Provider>
  );
};

export default TagSearch;
