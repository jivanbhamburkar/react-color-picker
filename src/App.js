import React from "react";
import "./App.css";
import ColorBlock from "./components/colorBlock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "lightgray"
    };
  }
  updateColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };
  render() {
    return (
      <>
        <div className="color-container">
          <ColorBlock color="red" onClick={this.updateColor} />
          <ColorBlock color="green" onClick={this.updateColor} />
          <ColorBlock color="orange" onClick={this.updateColor} />
          <ColorBlock color="blue" onClick={this.updateColor} />
          <ColorBlock color="cyan" onClick={this.updateColor} />
          {/*

           below type of repeting is called as Code Smell Code Smell

           <div
            className="color-block"
            onClick={() => {
              this.updateColor("red");
            }}
            style={{ backgroundColor: "red" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("green");
            }}
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("orange");
            }}
            style={{ backgroundColor: "orange" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("blue");
            }}
            style={{ backgroundColor: "blue" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("cyan");
            }}
            style={{ backgroundColor: "cyan" }}
          ></div> */}
        </div>
        <div
          className="target-div"
          style={{
            backgroundColor: this.state.color
          }}
        ></div>
      </>
    );
  }
}

export default App;
