import React, { Component } from "react";
import Sidebar from "../Sub-Components/Atoms/Sidebar";
import Cards from "../Sub-Components/Atoms/Cards";

class Main extends Component {
  render() {
    return (
      <div className="container-2">
        <div className="card-deck">
          <div className="card-1">
            <h5>Features</h5>
          </div>
          <div className="card-2">
            <h5>Featured Experts</h5>
          </div>
        </div>
        <div className="card-deck">
          <div className="card-1" style={{ marginTop: "2rem" }}>
            <Sidebar />
          </div>
          <div className="card-2">
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
