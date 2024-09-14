import React,{useEffect, useState} from "react";
import  data from "../../../Data.json";
import "./List.css";

const List = ({filteredItems, selectedList}) => {
    const [titles, setTitles] = useState([]);

 
    useEffect(() => {
        const filterTitles = filteredItems.map((item) => {return { id: item.id, titleName: data.titles[item.id]}});
        setTitles(filterTitles);
        
    },[filteredItems])
    
    return(
    <ul className="search-list" style={{ listStyleType: "none", padding: "0" }}>
        {titles.length > 0 ? (
          titles.map((title, index) => (
            
            <li className="search-item" key={index} onClick={() => selectedList(title)}>
              <div>
              <h3>{title.titleName}</h3>
              </div>
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    )
}

export default List;