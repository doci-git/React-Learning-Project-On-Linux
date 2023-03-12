import React from "react";
import Card from "./Card";
import data from "./data";

const Main = () => {
   const cards = data.map((item) => {
      return (
         <div className="test-div">
            <Card item={item} />
         </div>
      );
   });
   return <div className="main-card">{cards}</div>;
};
export default Main;
