import React from "react";
import ReactDOM from "react-dom/client";
import App, { PI, userName } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
    />
  </BrowserRouter>
);
