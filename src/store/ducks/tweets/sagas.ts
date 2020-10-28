//libraries
import { call, put, takeEvery } from 'redux-saga/effects'
//server
import { tweetsAPI } from '../../../api/tweetsApi'
//action creators
import {
    setAddTweetLoadingState,
    setFetchAddTweet,
    setLoadingState,
    setTweets,
    TweetsActionsType,
} from './actionCreators'
import { FetchAddTweetActionIT } from './contracts/actionTypes'
//state
import { addTweetLoadingState, LoadingState, Tweet } from './contracts/state'

// Запрашиваем твиты с сервера
export function* fetchTweetsRequest() {
    try {
        const data = yield call(tweetsAPI.getTweets) //получаем твиты с сервера
        yield put(setTweets(data)) // добавляем полученный ответ (массив объектов) в редакс
    } catch (error) {
        yield put(setLoadingState(LoadingState.ERROR))
    }
}

// Добавляем твит в базу данных
export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionIT) {
    try {
        const data: Tweet = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullName: 'Test Uuser',
                userName: 'Testuser',
                avatarUrl: 'https://source.unsplash.com/random/100x100?6',
            },
        }
        const item = yield call(tweetsAPI.fetchAddTweet, data) //получаем ответ с сервера, в виде объекта
        yield put(setFetchAddTweet(item)) // добавляем полученный ответ (объект) в редакс
    } catch (error) {
        yield put(setAddTweetLoadingState(addTweetLoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
