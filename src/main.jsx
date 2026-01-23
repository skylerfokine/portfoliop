// src/main.jsx  (important: import Bootstrap CSS here, once)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
// Optional: icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Your global overrides last (optional)
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
