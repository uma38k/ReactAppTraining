import React, {useEffect, useState} from 'react'

function WeatherApp() {
    const [city, setCity] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    useEffect (()=> {
        if (!currentCity) {
            return;
        }

        const fetchWeather = async () => {
            setError('');
            setWeather(null);

            const latlongRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(currentCity)}&count=1`);

            const latlongData = await latlongRes.json();
            console.log(latlongData);

            if (!latlongData.results || latlongData.results.length === 0) {
                setError('City not found or invalid city name entered');
                return;
            }

            const { latitude, longitude, name, country } = latlongData.results[0];

            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

            const weatherData = await weatherRes.json();

            setWeather({
                location:`${name}, ${country}`,
                temperature: weatherData.current_weather.temperature,
                windspeed: weatherData.current_weather.windspeed,
                time: weatherData.current_weather.time,
            })
        };

        fetchWeather();
    }, [currentCity]);

    const handleSearch = () => {
        if (city.trim()) {
            setCurrentCity(city.trim());
        }
    };

    return (
        <div>
            <h3>Weather App</h3>
            <input type='text' placeholder='Enter city name...' value={city} onChange={(e) => {setCity(e.target.value)}} ></input>
            <button onClick={handleSearch}>Get Weather</button>

            {error && (
                <p>{error}</p>
            )}

            {weather && (
                <div>
                    <p>Location: {weather.location}</p>
                    <p>Temperature: {weather.temperature}&deg;C</p>
                    <p>Windspeed: {weather.windspeed}km/h</p>
                    <p>Time: {new Date(weather.time).toLocaleString()}</p>
                </div>
            )}
            
        </div>
    )
}

export default WeatherApp;
