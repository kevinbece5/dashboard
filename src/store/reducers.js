import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import dashboardReducer from '../Reducers';

export default (history) => combineReducers({
    dashboard: dashboardReducer,
    router: connectRouter(history)
})