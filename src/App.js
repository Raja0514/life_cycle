import React from "react";
import "./App.css";
import Clock from "./Clock";
import Clock1 from "./Clock1";
import Lifecycle from "./Lifecycle";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.StrictMode>
          <React.Fragment>
            <div>
              <h1>Hello ,World!</h1>
              <h1>It is:{new Date().toLocaleTimeString()}</h1>
            </div>
            <Clock date={new Date()}></Clock>
            <Clock1 date={new Date()}></Clock1>
            <Lifecycle></Lifecycle>
          </React.Fragment>
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
