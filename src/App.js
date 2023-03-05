import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Header from "./components/Header.js";
import Form from "./components/Meme.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
// import Footer from "./components/Footer.js";

function Display() {
   return (
      <>
         <Header />
         <Form />
         <Main />
         <Footer />
      </>
   );
}
export default Display;
