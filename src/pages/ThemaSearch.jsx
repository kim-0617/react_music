import React from "react";
import { Link } from "react-router-dom";
import { ThemaSearchConts } from "../components";

const ThemaSearch = () => {
  return (
    <section id="thema__search">
      <div className="thema__inner container">
        <h2 className="title">태마 찾기</h2>
        <article className="thema__play">
          <h3>
            플레이 리스트
            <span>YouTube</span>
          </h3>
          <div className="play__inner">
            <figure className="play">
              <Link to="/themaSearchDetail">
                <img src="./assets/img/card/t1.png" alt="t01" />
                <figcaption>
                  <p className="play__title">
                    신비로운 우주 신비로운 우주신비로운 우주신비로운
                    우주신비로운 우주
                  </p>
                  <p className="play__tag"># 몽환적인</p>
                </figcaption>
              </Link>
            </figure>

            <figure className="play">
              <Link to="/themaSearchDetail">
                <img src="./assets/img/card/t2.png" alt="t02" />
                <figcaption>
                  <p className="play__title">신비로운 우주</p>
                  <p className="play__tag"># 몽환적인</p>
                </figcaption>
              </Link>
            </figure>

            <figure className="play">
              <Link to="/themaSearchDetail">
                <img src="./assets/img/card/t3.png" alt="t03" />
                <figcaption>
                  <p className="play__title">신비로운 우주</p>
                  <p className="play__tag"># 몽환적인</p>
                </figcaption>
              </Link>
            </figure>

            <figure className="play">
              <Link to="/themaSearchDetail">
                <img src="./assets/img/card/t4.png" alt="t04" />
                <figcaption>
                  <p className="play__title">신비로운 우주</p>
                  <p className="play__tag"># 몽환적인</p>
                </figcaption>
              </Link>
            </figure>

            <figure className="play">
              <Link to="/themaSearchDetail">
                <img src="./assets/img/card/t5.png" alt="t05" />
                <figcaption>
                  <p className="play__title">신비로운 우주</p>
                  <p className="play__tag"># 몽환적인</p>
                </figcaption>
              </Link>
            </figure>
          </div>
        </article>

        <article className="thema__bgm">
          <h3>
            <span>BGM </span>
            Playlist
          </h3>
          <p>다양한 BGM을 찾아보세요!</p>
          <ThemaSearchConts />
        </article>
      </div>
    </section>
  );
};

export default ThemaSearch;
