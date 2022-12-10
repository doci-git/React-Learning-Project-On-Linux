import React from "react";
const Header = () => {
    return (
     <>
       <header>
          <nav>
       <img src='/logo192.png'></img>
       <h1>React APP</h1>
             <ul className="list-menu">
                <li>home</li>
                <li>contact</li>
                <li>about</li>
             </ul>
          </nav>
       </header>
       </>
    );
 };
 export default Header