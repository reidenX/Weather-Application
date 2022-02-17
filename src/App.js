import "./App.css";
import Navbar from "./components/navbar";
import WeatherApp from "./components/weather_app";
import Map from "./components/world_map";
import Footer from "./components/footer";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="contents">
          <WeatherApp />
        </div>
        <Footer />
      </div>
    );
  }
}
