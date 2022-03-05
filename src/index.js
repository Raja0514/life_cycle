import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
function myClock() {
  ReactDOM.render(
    <React.StrictMode>
      <React.Fragment>
        <App />
      </React.Fragment>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
setInterval(myClock, 1000);
