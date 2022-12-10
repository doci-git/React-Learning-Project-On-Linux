import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import Main from "./Main.js"
import Footer from "./Footer.js";
import "./App.css"

function Display() {
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Display />);
