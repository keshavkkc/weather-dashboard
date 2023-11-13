// WeatherReport.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherReport = ({ weatherData }) => {
    if (!weatherData || !weatherData.main) {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Weather Data Not Available
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Weather Report for {weatherData.name}
                </Typography>
                <Typography variant="body1">
                    Temperature: {weatherData.main.temp} °C
                </Typography>
                <Typography variant="body1">
                    Feels Like: {weatherData.main.feels_like} °C
                </Typography>
                <Typography variant="body1">
                    Humidity: {weatherData.main.humidity} %
                </Typography>
                <Typography variant="body1">
                    Weather: {weatherData.weather[0].description}
                </Typography>
                <Typography variant="body1">
                    Wind Speed: {weatherData.wind.speed} m/s
                </Typography>
            </CardContent>
        </Card>
    );
};

export default WeatherReport;
