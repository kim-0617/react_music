import React, { useEffect, useState, Suspense } from "react";
import TagBox from "./TagBox";
import fetchAPI from "../utils/fetchAPI";
import { Link } from 'react-router-dom';
import chart from "../utils/chart50.json";

const MainBottom = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(
        "playlistItems?playlistId=PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m&part=snippet"
      );
      setVideos(data.items);
    };
    fetchResults();
  }, []);

  const onClickMore = (e) => {
    document.querySelectorAll('.tag__box').forEach(x => x.classList.add('show'));
    e.target.style.display = 'none';
  }

  if (videos?.length === 0 || !videos) return null;
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
            {videos.length && [...new Set(videos)].map((video, index) => (
              <TagBox key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
        {/* // cont */}
        <div className="add__link">
          <Link to="/" onClick={onClickMore}>더보기</Link>
        </div>
      </div>
    </section>
  );
};

export default MainBottom;