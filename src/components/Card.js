import React from "react";

const Card = (props) => {
   return (
      <div>
         <h1>{props.item.title}</h1>
         <p>{props.item.description}</p>
      </div>
   );
};

export default Card;
