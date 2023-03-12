import React from "react";

const Card = (props) => {
   return (
      <div className="div-card">
         <img className="picture" src={props.item.coverImg} alt="" />
         <h2 className="card-title">{props.item.title}</h2>
         <p className="card-content">{props.item.description}</p>
      </div>
   );
};

export default Card;
