import React from "react";
function Clock(props) {
  return (
    <React.Fragment>
      <div>
        <h1>Function Based Component with Props</h1>
        <h1>It is :{props.date.toLocaleTimeString()}</h1>
      </div>
    </React.Fragment>
  );
}
export default Clock;
