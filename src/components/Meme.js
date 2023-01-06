import React from "react";
const Form = () => {
   return (
      <div>
         <form action="">
            <label for="fname"></label>
            <input type="text" id="fname" name="fname" value="text" />
            <label for="lname"></label>
            <input type="text" id="lname" name="lname" value="text" />
            <input type="submit" value="Submit" />
         </form>
      </div>
   );
};
export default Form;
