import React from "react";
import { useState } from "react";

const Main = () => {
   return (
      <main>
         <form className="div-form">
            <input className="form-input" type="text" />
            <input className="form-input" type="text" />
            <button className="form-button">Get a New Meme Image</button>
         </form>
      </main>
   );
};
export default Main;
