import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <h1>
        {props.info.city}, {props.info.country}
      </h1>
      <div className="row weather-container">
        <div className="col-2">
          <img src={props.info.iconURL} alt={props.info.description}></img>
        </div>
        <div className="col-3">
          <WeatherTemperature info={props.info} />
        </div>
        <div className="col-3">
          <ul className=" weather_data">
            <li className="text-uppercase">{props.info.description}</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          {" "}
          <FriendlyDate date={props.info.date} />
        </div>
      </div>
    </div>
  );
}
