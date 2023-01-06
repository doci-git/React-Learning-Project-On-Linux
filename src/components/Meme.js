import React from "react";
const Form = () => {
   return (
      <div>
         <form action="">
            <input type="text" placeholder="Top text" className="form-input" />
            <input
               type="text"
               placeholder="Bottom text"
               className="form-input"
            />
            <button className="form-button">generate meme</button>
         </form>
      </div>
   );
};
export default Form;
