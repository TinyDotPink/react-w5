import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: Math.round(response.data.temperature.current),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconURL: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    let key = "5fobe02b0dff93d79ecc47a523d0f3t0";
    let query = city;
    let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    function handleCity(event) {
      setCity(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City"
                className="form_input"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="search-button" value="Search" />
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
