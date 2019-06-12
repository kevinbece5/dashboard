import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import quinelaReducer from '../Reducers';

export default (history) => combineReducers({
    quinela: quinelaReducer,
    router: connectRouter(history)
})