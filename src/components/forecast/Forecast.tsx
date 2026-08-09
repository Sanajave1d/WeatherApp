import { useState } from "react";
import type { ForecastData } from "../types/forecast";


const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wedneday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type ForecastProps = {
    data: ForecastData | null;
};
const Forecast = ({ data }:ForecastProps) => {
  const dayInWeek = new Date().getDay();
  const today= new Date()
  
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek),
  );

  const [open, setOpen] = useState<number|null> (null);

  if (!data?.list) {
    return null;
  }

  const todaysForecast = data.list.filter((item: ForecastData["list"][number]) => {
    const date = new Date(item.dt * 1000);
    return (
      date.getDate() === today.getDate() &&
      date.getDay() === today.getDay() &&
      date.getMonth() === today.getMonth()
    );
  });

  let rainprop = Math.max(...todaysForecast.map((item: ForecastData["list"][number]) => item.pop));
  if (rainprop < 0) {
    rainprop = 0;
  }

  return (
    <div className=" font-[Rubik] flex flex-col gap-5 text-white mt-5 w-xs p-2 px-4 border border-white/10 shadow-lg rounded-xl">
      <h2 className="text-gray-600">Seven Days Forecast</h2>
      {data.list.slice(0, 7).map((item: ForecastData["list"][number], idx) => {

        return (
          <div key={idx} className="text-white  ">
            <div className="w-full h-[1px]  bg-gray-400 mb-4"></div>
            <button onClick={() => setOpen(open==idx?null:idx)}>
              <div className="flex items-center cursor-pointer gap-10">
                <h3>{forecastDays[idx]}</h3>
                <img
                  className="w-7 invert brightness-100"
                  src={`icons/${item?.weather[0]?.icon}.png`}
                  alt="weather"
                />
                <h3>
                  {Math.round(item.main.temp_min)}/{" "}
                  {Math.round(item.main.temp_max)}
                </h3>
              </div>
            </button>

            {open === idx && (
              <div className="grid grid-cols-2 grid-rows-2 gap-y-3 pt-2 w-full justify-between">
                <div>
                  <h3 className="text-gray-500 uppercase text-xs">
                    Feels like
                  </h3>
                  <h1 className="text-xs font-bold text-white">
                    {item.main.feels_like}
                  </h1>
                </div>
                <div>
                  <h3 className="text-gray-500 uppercase text-xs">Humidity</h3>
                  <h1 className="text-xs font-bold text-white">
                    {item.main.humidity}
                  </h1>
                </div>
                <div>
                  <h3 className="text-gray-500 uppercase text-xs">Wind</h3>
                  <h1 className="text-xs font-bold text-white">
                    {item.wind.speed}
                  </h1>
                </div>
                <div>
                  <h3 className="text-gray-500 uppercase text-xs">
                    Chance of rain
                  </h3>
                  <h1 className="text-xs font-bold text-white">
                    {Math.round(rainprop * 100)}%
                  </h1>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
