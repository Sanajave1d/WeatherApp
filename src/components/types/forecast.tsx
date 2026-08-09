export type ForecastData = {
    list: {
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
    }[];
};