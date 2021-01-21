import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import MovieInfo from "../MovieInfo";
import "./style.scss";

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [search, setSearch] = useState();
  const [movies, setMovies] = useState();

  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=9478bf10b8e1167ddee123de7d993b63`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const getInformation = (movieTitle) => {
    console.log(movieTitle);
    let movieInformation = movies.filter((movie) => movie.title === movieTitle);
    setSelectedMovie(movieInformation[0]);
    console.log("selected :", selectedMovie);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    moviesFiltration(e.target.value);
  };

  const moviesFiltration = (searchValue) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9478bf10b8e1167ddee123de7d993b63&query=${searchValue}`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((error) => console.log(error));
  };

  if (!movies) {
    return (
      <div>
        <SearchBar search={handleSearch} />
        <h1>Loading movies...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <SearchBar search={handleSearch} />
        <h1><b>Movies List</b></h1>
        <br/>

        <div className="movies-container">
          <section className="movie-list">
            {movies &&
              movies.map((movie) => (
                <div className = "one_movie_card">
                <a key={movie.id} onClick={() => getInformation(movie.title)}>
                  {movie.title}
                </a>
                <br/>
                </div>
                
              ))}
              
          </section>
          <section className="movie-details">
            {selectedMovie && <MovieInfo movie={selectedMovie} />}
          </section>
        </div>
      </div>
    );
  }
};

export default MovieList;
