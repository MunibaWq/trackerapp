import React from "react";
import "./Header.css";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <div className="mainBody">
      <h1> IP Address Tracker</h1>
      <SearchBar />
    </div>
  );
};

export { Header };
