import React, { Component } from "react";
class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick=() =>{
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Lifecycle Methods</h1>
          <h1>It is:{this.state.date.toLocaleTimeString()}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default Lifecycle;
