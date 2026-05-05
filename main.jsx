import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// React를 index.html의 root에 연결
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);