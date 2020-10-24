//libraries
import { call, put, takeEvery } from 'redux-saga/effects'
//server
import { tweetsAPI } from '../../../api/tweetsApi'
//actions
import { setLoadingState, setTweets, TweetsActionsType } from './actionCreators'
//state request
import { LoadingState } from './contracts/state'

// Запрашиваем твиты с сервера
export function* fetchTweetsRequest() {
    try {
        const data = yield call(tweetsAPI.getTweet) //получаем твиты с сервера
        yield put(setTweets(data))
    } catch (error) {
        yield put(setLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
