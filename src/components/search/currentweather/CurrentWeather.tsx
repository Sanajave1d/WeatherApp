
type WeatherInfo = {
    description: string;
    icon: string;
};

type MainWeather = {
    temp: number;
    feels_like: number;
    humidity: number;
};

type Wind = {
    speed: number;
};

type CurrentWeatherData = {
    city: string;
    weather: WeatherInfo[];
    main: MainWeather;
    wind: Wind;
};

type ForecastItem = {
    dt: number;
    pop: number;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        feels_like: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
};

type ForecastData = {
    list: ForecastItem[];
};

type CurrentWeatherProps = {
    data: CurrentWeatherData | null;
    forecast: ForecastData|null;
};

const CurrentWeather = ({ data,forecast }: CurrentWeatherProps) => {
  if(!data || !forecast){
    return null;
  }

  const today = new Date()

  const todaysForecast=forecast.list.filter((item)=>{
    const date= new Date(item.dt*1000);
    return(
        date.getDate() === today.getDate() && date.getDay() === today.getDay() && date.getMonth() === today.getMonth()
    );
  })
  
  let rainprop = Math.max(...todaysForecast.map((item)=>item.pop));
  if(rainprop<0){
    rainprop=0
  }
  return (
    <div className="flex w-full font-[Rubik] flex-col items-start gap-2" >
      <div className="mt-5 w-full p-2 px-4 border border-white/10 shadow-lg rounded-xl flex items-center justify-between" >
            <div className=" font-[Rubik] flex  flex-col items-start gap-10 justify-between">
                <div className=" " >
                    <h1 className="text-white font-bold text-4xl" >{data.city} </h1>
                    <h4 className="text-gray-300 text-xs " >{data.weather?.[0]?.description}</h4>
                </div>
                <div  >
                    <h1  className="text-white font-bold text-4xl" >{Math.round(data.main.temp)}°C</h1>
                </div>
            </div>

            <div>
                <img className="w-50 invert brightness-100" src={`icons/${data.weather?.[0]?.icon}.png`} alt="" />
            </div>
      </div>
      <div className="mt-5 w-full p-6 border border-white/10 shadow-lg rounded-xl flex flex-col gap-5 items-start">
        <div className="nav pt-2">
          <h3 className="text-gray-500 uppercase text-xs" >Air Conditions</h3>
        </div>
        <div className="grid grid-cols-2  p-2 gap-y-5 gap-x-[20vw] w-full justify-between" >
          <div>
            <h3 className="text-gray-500 uppercase text-xs">Feels like</h3>
            <h1 className="text-2xl font-bold text-white">{data.main.feels_like}</h1>
          </div>
          <div>
            <h3 className="text-gray-500 uppercase text-xs">Humidity</h3>
            <h1 className="text-2xl font-bold text-white">{data.main.humidity}</h1>
          </div>
          <div>
            <h3 className="text-gray-500 uppercase text-xs">Wind</h3>
            <h1 className="text-2xl font-bold text-white">{data.wind.speed}</h1>
          </div>
          <div>
            <h3 className="text-gray-500 uppercase text-xs">Chance of rain</h3>
            <h1 className="text-2xl font-bold text-white">{Math.round(rainprop*100)}%</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
