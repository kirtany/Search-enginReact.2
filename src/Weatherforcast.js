import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weatherforcast.css";

export default function Weatherforcast(){
  return( <div className="Weatherforcast">
    <div className="row">
        <div className="col">
        <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
        

   
