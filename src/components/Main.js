import React from "react";
import Card from "./Card";
import data from "./data";

const Main = () => {
   const cards = data.map((item) => {
      return <Card item={item} />;
   });
   return <div>{cards}</div>;
};
export default Main;
