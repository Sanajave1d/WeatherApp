import { useState } from "react";
import CurrentWeather from "./components/search/currentweather/CurrentWeather";
import Search, { type CityOption } from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";
import  type {ForecastData}  from "./components/types/forecast";


const WEATHERAPI = import.meta.env.VITE_WEATHER_API;
const API_URL = "https://api.openweathermap.org/data/2.5";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);

  const handleOnSearchChange = (searchData: CityOption) => {
    const { latitude: lat, longitude: lon, label } = searchData;
    const currentWeatherFetch = fetch(
      `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHERAPI}&units=metric`,
    );
    const forecastFetch = fetch(
      `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHERAPI}&units=metric`,
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async ([weatherResponse, forecastResponse]) => {
        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        setCurrentWeather({ city: label, ...weatherData });
        setForecast({ city: label, ...forecastData });
      })
      .catch((error) => {
        console.error("Weather API error:", error);
      });

  };
  return (
    <>
      <div className="flex gap-10">
        <div className="w-2xl ml-16 mt-10">
          <Search onSearchChange={handleOnSearchChange} />
          <CurrentWeather data={currentWeather} forecast={forecast} />
        </div>
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
};

export default App;
