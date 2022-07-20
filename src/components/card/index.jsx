import React from "react";
import "./style.scss";
const Card = (props) => {
  return (
    <div className="card">
      <h4 className="card__title">{props.children}</h4>
    </div>
  );
};

export default Card;
