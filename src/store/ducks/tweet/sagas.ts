//libraries
import { call, put, takeEvery } from 'redux-saga/effects'
//server
import { tweetsAPI } from '../../../api/tweetsApi'
import { Tweet } from '../tweets/contracts/state'
//actions
import { setLoadingState, setTweet, TweetActionsType } from './actionCreators'
//actions Types
import { FetchTweetActionIT } from './contracts/actionTypes'
//state request
import { LoadingState } from './contracts/state'

// Запрашиваем твиты с сервера
export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionIT) {
    try {
        const data: Tweet[] = yield call(tweetsAPI.fetchTweet, tweetId) //получаем твит с сервера
        yield put(setTweet(data[0]))
    } catch (error) {
        yield put(setLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest)
}
