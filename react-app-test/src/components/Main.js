import React from "react";
import Card from "./Card.js";
function Main() {
   return (
      <>
         <Card img="./images/card-1.jpg" star="5.0" state="Usa" />
         <Card img="./images/card-2.jpg" star="4.9" state="Swizerland" />
         <Card img="./images/card-3.png" star="4.8" state="Italy" />
         <Card img="./images/card-4.jpg" star="5.0" state="Airbnb" />
      </>
   );
}
export default Main;
