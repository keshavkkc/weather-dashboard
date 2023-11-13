import axios from 'axios'

export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading
});

export const setWeatherData = (data) => ({
    type: 'SET_WEATHER_DATA',
    payload: data
});

export const setError = (hasError) => ({
    type: 'SET_ERROR',
    payload: hasError
});


export const fetchWeatherData = (state, city) => {
    const API_KEY = "863c4fb560122ec45cad038c66c8446a"
    return async (dispatch) => {
        dispatch(setLoading(true));

        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${state},${city}&limit=1&appid=${API_KEY}`;
            const geoResponse = await axios.get(geoUrl);
            const geoData = geoResponse.data;
            console.log(geoData)
            const lat = geoData[0].lat;
            const lon = geoData[0].lon;


            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
            const weatherResponse = await axios.get(weatherUrl);
            const weatherData = weatherResponse.data;

            dispatch(setWeatherData(weatherData));
        } catch (error) {
            dispatch(setError(true));
            console.error('Error fetching weather data:', error);
        }

        dispatch(setLoading(false));
    };
};
