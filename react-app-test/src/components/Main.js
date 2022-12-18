import React from "react";
import Card from "./Card.js";
function Main() {
   return (
      <div className="parent">
         <Card
            img="./images/card-1.jpg"
            star="5.0"
            comment="(116)"
            state="Usa"
            paragraf="Life Lessons with Katie Zaferes"
            price ="From €136"
         />
         <Card
            img="./images/card-2.jpg"
            star="4.9"
            comment="(105)"
            state="Swizerland"
            paragraf="Alpes of Swiss"
            price ="From €166"
         />
         <Card
            img="./images/card-3.png"
            star="4.8"
            comment="(200)"
            state="Italy"
            paragraf="Tuscany county Side"
            price ="From €150"
         />
         <Card
            img="./images/card-4.jpg"
            star="5.0"
            comment="(36)"
            state="Airbnb"
            paragraf="Gift Cart"
            price ="From €100"
         />
      </div>
   );
}
export default Main;
