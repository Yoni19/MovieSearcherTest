import React from "react";
import "./style.scss"

const SearchBar = (props) => {
  return (
    <div className="search-bar row">
      <h1>
        <b>FLEET MOVIES</b>
      </h1>
      <input
        type="text"
        name="search"
        className="search"
        onChange={props.search}
        placeholder="Search your movie"
      />
    </div>
  );
};

export default SearchBar;
