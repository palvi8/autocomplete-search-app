import React from "react";
import Card from "./Card/Card";
import "./CardList.css";

const CardList = ({bookDetail}) => {
    
    return(
        <div className="card-container">
            { bookDetail.map((item, index) => (
            <Card data={item} key={index}/>
        ))}
        </div>

    )
}

export default CardList;