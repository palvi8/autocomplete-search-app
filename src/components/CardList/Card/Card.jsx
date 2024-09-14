import React from "react";
import "./Card.css"

const Card = ({ data }) => {

  return (
    <div className="card">
        <h4>{data.title}</h4>
        <p>{data.summary.length > 300 ? data.summary.slice(0, 300)+'...': data.summary}</p>
      <div style={{alignSelf:"end" }}>
      <h6>{data.author}</h6>
      </div>
    </div>
  );
};

export default Card;
