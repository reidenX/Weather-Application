import React from "react";
import "./navbar.css";
import logo from "../img/Nav Logo.svg";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.Toggler = this.Toggler.bind(this);
  }

  Toggler() {
    document.querySelector(".link1").classList.toggle("nlink");
    document.querySelector(".link2").classList.toggle("nlink");
    document.querySelector(".link3").classList.toggle("nlink");
    document.querySelector(".link4").classList.toggle("nlink");
    document.querySelector(".nav_patty").classList.toggle("xPatty");
    document.querySelector(".navCover").classList.toggle("blackNav");
  }

  render() {
    return (
      <div className="nav_body">
        <div className="nav_logoContainer">
          <div className="navCover"></div>
          <img className="nav_logo" src={logo} alt="" />
          <h4 className="nav_logoName">Your Weather</h4>
        </div>
        <div className="nav_links">
          <a className="link1 link nlink" href="#">
            Hourly
          </a>
          <a className="link2 link nlink" href="#">
            Weekend
          </a>
          <a className="link3 link nlink" href="#">
            Monthly
          </a>
          <a className="link4 link nlink" href="#">
            Yearly
          </a>
        </div>
        <button onClick={this.Toggler} className="nav_burger">
          <div className="nav_patty xPatty"></div>
        </button>
      </div>
    );
  }
}
