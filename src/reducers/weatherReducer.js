
const initialState = {
    data: [],
    isLoading: false,
    isError: false,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER_DATA':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                isError: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default weatherReducer;
