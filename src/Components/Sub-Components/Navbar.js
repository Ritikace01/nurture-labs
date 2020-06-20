import React, { Component } from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SmsIcon from "@material-ui/icons/Sms";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Logo from "../../logo.svg";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light" style={{ backgroundColor: "#F5CBA7 " }}>
      <a class="navbar-brand">
        <img src={Logo} />
        Logo
      </a>
      <div class="d-flex flex-row bd-highlight">
        <div class="pr-4 pl-4 bd-highlight">Dashboard</div>
        <div class="pr-4 pl-4 bd-highlight">Find Experts</div>
        <div class="pr-4 pl-4 bd-highlight">Discussion</div>
      </div>
      <div
        className="nav-item"
        style={{ alignItems: "right", marginRight: "4rem" }}
      >
        <NotificationsActiveIcon style={{ marginRight: "2rem" }} />
        <SmsIcon style={{ marginRight: "2rem" }} />
        <AccountCircleIcon style={{ marginRight: "2rem" }} />
      </div>
    </nav>
  );
};

export default Navbar;
