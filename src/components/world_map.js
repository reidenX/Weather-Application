import React, { Component } from "react";
import "./world_map.css";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wm_container">
        <div id="map"></div>
      </div>
    );
  }
}
