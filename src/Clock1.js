import React, { Component } from "react";
class Clock1 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Class Based Component with props</h1>
          <h1>It is :{this.props.date.toLocaleTimeString()}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default Clock1;
