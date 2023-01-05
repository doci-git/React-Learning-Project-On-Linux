import React from "react";
import ReactDOM from "react-dom/client";
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
