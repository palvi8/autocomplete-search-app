import React from "react";
import "./Card.css"

const Card = ({ data }) => {
  const {title, summary, author} = data;

  const getSummary = () => summary.length > 250 ? summary.slice(0, 250)+'...': summary;

  return (
    <div className="card">
        <h4>{title}</h4>
        <p>{getSummary()}</p>
      <div style={{alignSelf:"end" }}>
      <h6>{author}</h6>
      </div>
    </div>
  );
};

export default Card;
