import React from "react";
import './style.scss'


const MovieInfo = (props) => {
  return (
    <div>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
        />
        <div>
          <h3>{props.movie.title}</h3>
          <p>
            <b>NOTE</b> : {props.movie.vote_average} / 10
          </p>

          <p>{props.movie.overview}</p>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default MovieInfo;
