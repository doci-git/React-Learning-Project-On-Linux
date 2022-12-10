import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";

function Display() {
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}


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
