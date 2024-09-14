import React, { useState } from "react";
import List from "../List/List";
import  data from "../../../Data.json";
import "./SearchBar.css"
import CardList from "../CardList/CardList";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [bookDetail, setBookDetail] = useState([]);


  const countOccurrence = (sentence, word) => {
    const count = sentence.match(new RegExp(`\\b${word}\\b`, 'gi'));
    return count?.length > 0 ? count.length : 0;
  }
  const handleSearch = (e) => {
    const value = e.target.value;
    if(value !== ''){
      setSearchInput(value);

      const filteredList = data.summaries.reduce((acc, item) => {
        const totalOccurrence = countOccurrence(item.summary.toLocaleLowerCase(), value.toLocaleLowerCase());
        if(totalOccurrence > 0){
          acc.push({...item, totalOccurrence})
        }
        return acc;
      },[]).sort((a,b) => b.totalOccurrence - a.totalOccurrence);
      setFilteredItems(filteredList);
    }else{
      resetValue();
    }
  };

  const handleOnSelect = (item) => {
      let itemExists = bookDetail.some(book => book.id === item.id);
      if(!itemExists){
        let selectedData = {};
        const author = data.authors.filter((author) => author.book_id === item.id);
        const title =  item.titleName;
        const summary = data.summaries.filter((summary) => summary.id === item.id);
        selectedData = {id: item.id, author: author[0].author, title, summary: summary[0].summary}
        setBookDetail([...bookDetail, selectedData]);
      }
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
