import React, { useState, useEffect } from "react";
import "./SearchBar.css"

const SearchBar = ({handleValue, resetValue}) => {
  const [searchInput, setSearchInput] = useState("");

useEffect(() => {
  if(resetValue) {setSearchInput('');}
},[resetValue])

useEffect(() =>{
  if(searchInput){
    handleValue(searchInput);
  }else{
    handleValue('')
  }
},[searchInput])

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <div className="search-bar-container">
      <h1>Search Books</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
