//libraries
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { TweetsState } from './ducks/tweets/contracts/state'
//reducers
import { tweetsReducer } from './ducks/tweets/reducer'
import rootSaga from './saga'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const rootReducer = combineReducers({
    tweets: tweetsReducer,
})

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
