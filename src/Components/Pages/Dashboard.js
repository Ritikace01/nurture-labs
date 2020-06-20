import React, { Component } from "react";
import Navbar from "../Sub-Components/Navbar";
import Main from "../Sub-Components/Main";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
      </React.Fragment>
    );
  }
}

export default Dashboard;
