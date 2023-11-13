import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../actions/weatherAction";
import { Select, MenuItem, Typography } from "@mui/material";
import WeatherChart from "./WeatherChart";
import WeatherReport from "./WeatherReport";

const WeatherDashboard = () => {
    const weather = useSelector((state) => state.weather.data);

    const dispatch = useDispatch();

    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");


    const handleStateChange = (event) => {

        setSelectedState(event.target.value);
        setSelectedCity("");
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };
    useEffect(() => {
        if (selectedCity) {
            dispatch(fetchWeatherData(selectedState, selectedCity));
        }
    }, [selectedCity, dispatch]);


    const states = [
        { name: "Delhi", code: "DL" }
    ];


    const cities = {
        Delhi: ["Delhi"]
    };


    return (
        <div className="weather-dashboard">
            <Typography variant="h4" component="h1">
                Weather Dashboard
            </Typography>
            <div className="select-menus">
                <Select
                    value={selectedState}
                    onChange={handleStateChange}
                    displayEmpty
                    variant="outlined"
                >
                    <MenuItem value="" disabled>
                        Select a state
                    </MenuItem>
                    {states.map((state) => (
                        <MenuItem key={state.code} value={state.name}>
                            {state.name}
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    value={selectedCity}
                    onChange={handleCityChange}
                    displayEmpty
                    variant="outlined"
                    disabled={!selectedState}
                >
                    <MenuItem value="" disabled>
                        Select a city
                    </MenuItem>
                    {cities[selectedState] &&
                        cities[selectedState].map((city) => (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                </Select>
            </div>
            <div className="charts">
                {weather.isLoading && <p>Loading...</p>}
                {weather.isError && <p>Error: {weather.isError}</p>}
                {/* <GeoChart /> */}
                {weather && selectedCity && <WeatherReport weatherData={weather} />}
                {weather && selectedCity && <WeatherChart weatherData={weather} />}
            </div>
        </div>
    );
};

export default WeatherDashboard;
