import React from "react";
import "./world_map.css";

export default class Map extends React.Component {
  render() {
    return (
      <div className="wm_container">
        <div id="map"></div>
      </div>
    );
  }
}
