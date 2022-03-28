import React, { useState } from "react";
import "./weather_app.css";

function WeatherApp() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `${process.env.REACT_APP_BASE}weather?q=${query}&units=metric&appid=${process.env.REACT_APP_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
          setQuery("");
        });
    }
  };

  return (
    <div className="wa_container">
      <div className="wa_inputContainer">
        <input
          className="wa_input"
          placeholder="Search City"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {typeof weather.main !== "undefined" ? (
        <div className="wa_lowerContainer">
          <div className="wa_section1">
            <h1 className="wa_cityName">{weather.name}</h1>
            <div className="wa_tempAndIcon">
              <h2 className="wa_temperature">{weather.main.temp}°C</h2>
              <img
                width="110"
                className="wa_icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
          </div>

          <div className="wa_section2">
            <h2 className="wa_description">{weather.weather[0].description}</h2>
            <h2 className="wa_country">Country: {weather.sys.country}</h2>
            <h2 className="wa_humidity">Humidity: {weather.main.humidity}%</h2>
            <h2 className="wa_speed">Speed: {weather.wind.speed} km/h</h2>
          </div>
        </div>
      ) : (
        <div className="wa_lowerContainer">
          <div className="wa_section1">
            <h1 className="wa_cityName">City</h1>
            <div className="wa_tempAndIcon">
              <h2 className="wa_temperature">0°C</h2>
            </div>
          </div>

          <div className="wa_section2">
            <h2 className="wa_description">unknow conditions</h2>
            <h2 className="wa_country">Country: </h2>
            <h2 className="wa_humidity">Humidity: </h2>
            <h2 className="wa_speed">Speed: </h2>
          </div>
        </div>
      )}
    </div>
  );
}
export default WeatherApp;
