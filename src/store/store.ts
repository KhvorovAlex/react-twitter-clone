//libraries
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
//state Types
import { TweetsState } from './ducks/tweets/contracts/state'
import { TweetState } from './ducks/tweet/contracts/state'
import { TagsState } from './ducks/tags/contracts/state'
//reducers
import { tweetsReducer } from './ducks/tweets/reducer'
import { tweetReducer } from './ducks/tweet/reducer'
import { tagsReducer } from './ducks/tags/reducer'
//saga
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
    tweet: tweetReducer,
    tags: tagsReducer,
})

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState
    tweet: TweetState
    tags: TagsState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
