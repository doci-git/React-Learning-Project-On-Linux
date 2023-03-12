import React from "react";

const Nav = () => {
   const date = new Date();

   const y = date.getFullYear();
   return (
      <div className="nav-div">
         <h2 className="h2-nav">Travel blog</h2>
         <h6 className="h6-nav">Must visited in/{y}</h6>
      </div>
   );
};
export default Nav;
