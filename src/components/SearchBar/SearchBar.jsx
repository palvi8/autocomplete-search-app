import React, { useState } from "react";
import List from "../List/List";
import  data from "../../../Data.json";
import "./SearchBar.css"
import CardList from "../CardList/CardList";

const items = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
];

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [bookDetail, setBookDetail] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    // Filter the list based on input
    const filtered = data.summaries.filter((item) =>
      item.summary.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  const handleOnSelect = (item) => {
      let selectedData = {}  
      const author = data.authors.filter((author) => author.book_id === item.id);
      const title =  item.titleName;
      const summary = data.summaries.filter((summary) => summary.id === item.id);

      selectedData = {author: author[0].author, title, summary: summary[0].summary}
      setBookDetail([...bookDetail, selectedData]);
      resetValue();
  }

  const resetValue = () => {
    setSearchInput("");
    setFilteredItems([]);
  }
  
  return (
    <div className="search-bar-container">
      <h1>Books</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearch}
      />

      {filteredItems.length > 0 ? <List filteredItems={filteredItems} selectedList={handleOnSelect}/>: <></>}
      {bookDetail.length > 0 ? <CardList bookDetail={bookDetail}/>: <></>}
    </div>
  );
};

export default SearchBar;
