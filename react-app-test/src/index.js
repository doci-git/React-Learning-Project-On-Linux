import React from "react";
import ReactDOM from "react-dom/client";

function Display() {
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

const Header = () => {
   return (
    <>
      <header>
         <nav>
            <ul>
               <li>home</li>
               <li>contact</li>
               <li>about</li>
            </ul>
         </nav>
      </header>
      <img src='/logo192.png'></img>
      </>
   );
};
const Main = () => {
   return (
      <div>
         <h2>main app</h2>
         <p>hello this is thet start main app </p>
      </div>
   );
};
const Footer = () => {
   return <footer> all rights resreved </footer>;
};
ReactDOM.createRoot(document.getElementById("root")).render(<Display />);
