import React from "react";
const Form = () => {
   function generate() {
      console.log("good job");
   }
   return (
      <div className="div-form">
         <form className="form" action="">
            <input type="text" placeholder="Top text" className="form-input" />
            <input
               type="text"
               placeholder="Bottom text"
               className="form-input"
            />
            <button className="form-button" onClick={generate}>
               Generate meme
            </button>
         </form>
      </div>
   );
};
export default Form;
