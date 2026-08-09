# 🌤️ Weather App

A responsive weather forecast application built with **React, TypeScript, Tailwind CSS, and OpenWeather API**.

The app allows users to search for cities and view their current weather conditions, air conditions, and upcoming forecasts. It also provides a default weather location and an interactive forecast accordion.

## ✨ Features

* 🔍 Search for cities using **GeoDB Cities API**
* 📍 Display weather based on city latitude and longitude
* 🌡️ Current temperature and weather conditions
* 💧 Humidity information
* 🌬️ Wind speed
* 🌡️ Feels-like temperature
* 🌧️ Chance of rain
* 📅 Seven-day-style forecast interface
* 📂 Expandable forecast details
* 🏙️ Lahore loaded as the default city
* ⚡ Debounced city search
* 📱 Responsive UI
* 🎨 Styled with Tailwind CSS
* 🔐 API keys stored using environment variables

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **Vite**
* **Redux Toolkit**
* **Tailwind CSS**
* **React Select Async Paginate**
* **OpenWeather API**
* **GeoDB Cities API**

## 📡 APIs

### OpenWeather

Used to retrieve:

* Current weather
* Temperature
* Humidity
* Wind information
* Weather conditions
* Forecast data
* Probability of precipitation

### GeoDB Cities

Used to search for cities and retrieve:

* City name
* Country code
* City ID
* Latitude
* Longitude

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd weatherapp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create an environment file

Create a `.env` file in the root of the project:

```env
VITE_WEATHER_API=your_openweather_api_key
```

If you are using a GeoDB API key, add it as well:

```env
VITE_GEO_API_KEY=your_geodb_api_key
```

### 5. Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

## 🔐 Environment Variables

API keys should **not** be committed to GitHub.

The `.env` file should be included in `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
```

For other developers, you can provide a `.env.example` file:

```env
VITE_WEATHER_API=
VITE_GEO_API_KEY=
```

## 📁 Project Structure

```text
src/
├── components/
│   ├── search/
│   │   ├── Search.tsx
│   │   └── currentweather/
│   │       └── CurrentWeather.tsx
│   │
│   └── forecast/
│       └── Forecast.tsx
│
├── features/
│   └── weather/
│       └── weatherSlice.tsx
│
├── Api.ts
├── App.tsx
├── main.tsx
└── store.ts
```

## 🔄 How It Works

The application follows this basic flow:

```text
User searches for a city
        ↓
GeoDB Cities API
        ↓
City latitude + longitude
        ↓
OpenWeather API
        ↓
Current Weather + Forecast
        ↓
React Components
        ↓
Weather information displayed
```

The search component uses `AsyncPaginate` to load city results as the user types.

## 🌧️ Forecast

The forecast API provides multiple forecast entries throughout the day.

The application uses the forecast data to display weather information such as:

* Temperature
* Weather icon
* Feels-like temperature
* Humidity
* Wind speed
* Probability of precipitation

The forecast section also uses an accordion-style interface so users can expand individual forecast entries.

## 🧠 What I Practiced

This project was created to practice working with:

* React components
* TypeScript types
* React state
* `useState`
* `useEffect`
* REST APIs
* Fetch API
* Promises
* `Promise.all()`
* Async data loading
* API response handling
* Array methods such as `map()`, `filter()`, and `slice()`
* Redux Toolkit
* Environment variables
* Tailwind CSS
* Responsive layouts
* React Select Async Paginate
* Conditional rendering
* Accordion components

## 📌 Future Improvements

Possible improvements for future versions:

* [ ] Add loading states
* [ ] Add API error messages
* [ ] Add proper 7-day daily forecast grouping
* [ ] Add hourly forecast
* [ ] Add weather-based background animations
* [ ] Add current location detection
* [ ] Add temperature unit switching between °C and °F
* [ ] Add favorite cities
* [ ] Improve mobile responsiveness
* [ ] Move API requests completely into Redux
* [ ] Add better TypeScript types for API responses

## 📸 Screenshots

Add screenshots of the application here:

```md
![Weather App Screenshot](./screenshots/weather-app.png)
```

## 📄 License

This project was created for learning and practice purposes.
