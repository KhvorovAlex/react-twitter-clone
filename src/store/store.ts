//libraries
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { TagsState } from './ducks/tags/contracts/state'
import { tagsReducer } from './ducks/tags/reducer'
import { TweetsState } from './ducks/tweets/contracts/state'
//reducers
import { tweetsReducer } from './ducks/tweets/reducer'
import rootSaga from './saga'

//Подключаем redux devtools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

//root-reducer
const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
})

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState
    tags: TagsState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
