import React from "react";
import PropsType from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

//Movies Component는 state를 필요로 하지 않으므로 function Component로 만들어줌
function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            year,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
          <h3 className="movie_title">
            {title.slice(0, 30)}
            {title.length > 30 ? "..." : ""}
          </h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => (
              <li key={index} className="genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie_summary">{summary.slice(0, 140)} ...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propsType = {
  id: PropsType.number.isRequired,
  title: PropsType.string.isRequired,
  year: PropsType.number.isRequired,
  summary: PropsType.string.isRequired,
  poster: PropsType.string.isRequired,
  genres: PropsType.arrayOf(PropsType.string).isRequired,
};

export default Movie;
