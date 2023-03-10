import React from "react";

const Card = (props) => {
   return (
      <div className="div-card">
         <section>
            <div className="picture">
               <img src={props.item.coverImg} alt="" />
            </div>
            <h1 className="card-title">{props.item.title}</h1>
            <p className="card-content">{props.item.description}</p>
            <button>Read</button>
         </section>
      </div>
   );
};

export default Card;
