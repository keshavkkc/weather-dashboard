import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import weatherReducer from '../reducers/weatherReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        weather: weatherReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore