import React from "react";
import "./SearchBar.css";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");
};

const SearchBar = () => {
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for any IP address or domain" />
      <button className="searchBtn" type="submit">
        <img src="../images/icon-arrow.svg" alt="" />
      </button>
    </form>
  );
};

export { SearchBar };
