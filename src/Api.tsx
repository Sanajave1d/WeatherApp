
const GEOAPI = import.meta.env.VITE_GEO_API;

export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': GEOAPI,
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
