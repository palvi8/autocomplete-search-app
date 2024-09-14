import React,{useEffect, useState} from "react";
import  data from "../../../Data.json";

const List = ({filteredItems, selectedList}) => {
    const [titles, setTitles] = useState([]);

 
    useEffect(() => {
        const filterTitles = filteredItems.map((item) => {return { id: item.id, titleName: data.titles[item.id]}});
        setTitles(filterTitles);
        
    },[filteredItems])
    
    return(
    <ul style={{ listStyleType: "none", padding: "0" }}>
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <li key={index} style={{ padding: "8px 0" }} onClick={() => selectedList(title)}>
              {title.titleName}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    )
}

export default List;