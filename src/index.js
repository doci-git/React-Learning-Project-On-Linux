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
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Display />);
