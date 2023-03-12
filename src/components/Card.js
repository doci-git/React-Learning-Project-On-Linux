import React from "react";

const Card = (props) => {
   return (
      <div className="div-card">
         <section>
            <img className="picture" src={props.item.coverImg} alt="" />

            <h1 className="card-title">{props.item.title}</h1>
            <p className="card-content">{props.item.description}</p>
            <button>Read</button>
         </section>
      </div>
   );
};

export default Card;
