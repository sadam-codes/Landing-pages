import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./mediaquery.css";
import App from "./App";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
)
