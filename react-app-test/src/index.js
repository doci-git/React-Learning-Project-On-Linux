import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";
import "./components/App.css";

function Display() {
   return (
      <>
         <Header />
         <Main />
         <Main img src="./images/card-2.jpg" alt="" className="card-image" />
         <Main />
      </>
   );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Display />);
