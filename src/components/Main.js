import React from "react";
import data from "./data";

const Main = () => {
   const butt = () => {
      const item = data.data.memes;
      const random = Math.floor(Math.random(item) * item.length);
      const url = item[random].url;
      console.log(url);
   };
   return (
      <main>
         <div className="div-form">
            <input className="form-input" type="text" />
            <input className="form-input" type="text" />
            <button onClick={butt} className="form-button">
               Get a New Meme Image
            </button>
         </div>
      </main>
   );
};
export default Main;
