import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return week[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img src={props.forecastData.condition.icon_url} alt="weather" />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.forecastData.temperature.day)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.forecastData.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
