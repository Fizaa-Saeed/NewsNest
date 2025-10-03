import React, { Component } from "react";
import loading from "../loading.gif"; // correct path

export default class Spinner extends Component {
  render() 
  {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}