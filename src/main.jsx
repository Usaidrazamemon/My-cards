import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Stairs from "./components/common/Stairs.jsx";
import NavContext from "./components/context/NavContext.jsx"; // Correct path

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavContext>
          <App />
        </NavContext>
      </Stairs>
    </BrowserRouter>
  </React.StrictMode>
);

