
import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

const WeatherChart = ({ weatherData }) => {
    if (!weatherData || !weatherData.main) {
        return <div>No weather data available</div>;
    }

    const chartData = [
        { x: 'Temperature', y: weatherData.main.temp },
        { x: 'Humidity', y: weatherData.main.humidity },
    ];

    return (
        <div>
            <h2>Weather Data Visualization</h2>
            <XYPlot xType="ordinal" width={300} height={300} margin={{ left: 50, right: 10, top: 10, bottom: 50 }}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={chartData} />
            </XYPlot>
        </div>
    );
};

export default WeatherChart;
