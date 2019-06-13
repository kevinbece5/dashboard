import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga';
import dashboardSagas from '../sagas';

const sagasMiddleware = createSagaMiddleware();
export const history = createBrowserHistory()

function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                sagasMiddleware,
                logger
            ),
        ),
    )
    sagasMiddleware.run(dashboardSagas);
    return store
}

export default configureStore