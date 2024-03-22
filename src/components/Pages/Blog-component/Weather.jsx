import React, { useEffect, useState } from "react";
import cloudy from "../Blog-component/cloudy.png";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (showPosition) {
        const latitude = showPosition.coords.latitude;
        const longitude = showPosition.coords.longitude;
        console.log(latitude, longitude);
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9678d0a4524226e67448cca6360b286d&units=metric`
            );
            const printData = await response.json();
            console.log(printData);
            setWeatherData(printData);
          } catch (error) {
            console.error("data Not Fetched");
          }
        };
        fetchData();
      });
    }
  }, []);
  return (
    <div className="weatherComp">
      <div className="weatherContainer">
        <h1 >Weather</h1>
        {weatherData ? (
          <div>
            <p className="f-w700">City :&nbsp; {weatherData.name}</p>
            <div className="weatherDesc">
              <p>Temp: {weatherData.main.temp} C</p>
              <p>Feels Like {weatherData.main.feels_like} C</p>
            </div>
            <div className="weatherDesc">
              <p>
                <img src={cloudy} alt="" />
                {weatherData.weather[0].description}
              </p>
              <p>Humidity: {weatherData.main.humidity}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
