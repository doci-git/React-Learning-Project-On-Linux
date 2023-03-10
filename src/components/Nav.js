import React from "react";

const Nav = () => {
   const date = new Date();
   const d = date.getDay();
   const m = date.getMonth();
   const y = date.getFullYear();
   return (
      <div className="nav-div">
         <h6 className="h6-nav">today news </h6>
         <h2 className="h2-nav">The News Time </h2>
         <h5 className="h5-nav">
            today is {d}/{m}/{y}
         </h5>
      </div>
   );
};
export default Nav;
