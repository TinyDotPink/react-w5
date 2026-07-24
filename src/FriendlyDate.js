import React from "react";

export default function FriendlyDate(props) {
  let day = props.date.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let date = props.date.getDate();
  let month = props.date.getMonth();
  let year = props.date.getUTCFullYear();
  return (
    <ul className="date_weather">
      <li>{week[day]}</li>
      <li>
        {" "}
        {date}.{month}.{year}{" "}
      </li>
      <li>
        {" "}
        {hour}:{minute}
      </li>
    </ul>
  );
}
