import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Main from "./components/Main.js"
import Footer from "./components/Footer.js";
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
