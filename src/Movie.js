import React from "react";
import PropsType from "prop-types";
import "./Movie.css";

//Movies Component는 state를 필요로 하지 않으므로 function Component로 만들어줌
function Movie({ id, title, year, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title}></img>
      <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propsType = {
  id: PropsType.number.isRequired,
  title: PropsType.string.isRequired,
  year: PropsType.number.isRequired,
  summary: PropsType.string.isRequired,
  poster: PropsType.string.isRequired,
};

export default Movie;
