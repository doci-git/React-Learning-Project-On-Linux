import React from "react";
import memeData from "./memeData";
const Form = () => {
   function generate() {
      const memesArray = memeData.data.memes;
      const random = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[random].url;
      console.log(url);
   }
   return (
      <div className="div-form">
         <input type="text" placeholder="Top text" className="form-input" />
         <input type="text" placeholder="Bottom text" className="form-input" />
         <button className="form-button" onClick={generate}>
            Generate meme
         </button>
         <img src=" " alt="" />
      </div>
   );
};
export default Form;
