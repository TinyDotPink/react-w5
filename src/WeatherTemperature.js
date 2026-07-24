import React, { useState } from "react";

export default function WeatherTemperautre(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <div>
        <div className="temperature_output">{props.info.temperature}</div>
        <div className="temperature_unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.info.temperature * 1, 8) + 32;
    return (
      <div>
        <div className="temperature_output">{fahrenheit}</div>
        <div className="temperature_unit">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
