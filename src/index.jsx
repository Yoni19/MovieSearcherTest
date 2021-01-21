import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/NavBar";
import MovieList from "./Components/MovieList";
import "./styles.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <MovieList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
