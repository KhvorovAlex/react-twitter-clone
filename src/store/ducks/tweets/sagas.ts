import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsAPI } from '../../../api/tweetsApi'
import { setLoadingState, setTweets, TweetsActionsType } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTweetsRequest() {
    try {
        const data = yield call(tweetsAPI.getTweet)
        console.log(data)
        yield put(setTweets(data))
    } catch (error) {
        yield put(setLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
