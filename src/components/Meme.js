import React from "react";
import memeData from "./memeData";

const Form = () => {
   function generate() {
      const [imgs, setImgs] = React.useState("");

      const memesArray = memeData.data.memes;
      const random = Math.floor(Math.random() * memesArray.length);
      setImgs(memesArray[random].url);
   }

   return (
      <main>
         <div className="div-form">
            <input type="text" placeholder="Top text" className="form-input" />
            <input
               type="text"
               placeholder="Bottom text"
               className="form-input"
            />
            <button className="form-button" onClick={generate}>
               Generate meme
            </button>
         </div>
         <img src="" alt="" />
      </main>
   );
};
export default Form;
