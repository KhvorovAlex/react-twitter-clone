//libraries
import { call, put, takeEvery } from 'redux-saga/effects'
//server
import { tweetsAPI } from '../../../api/tweetsApi'
//actions
import { setLoadingState, setTweet, TweetActionsType } from './actionCreators'
//actions Types
import { SetTweetActionIT } from './contracts/actionTypes'
//state request
import { LoadingState } from './contracts/state'

// Запрашиваем твиты с сервера
export function* fetchTweetRequest({ payload: id }: SetTweetActionIT) {
    try {
        const data = yield call(tweetsAPI.getTweet, id) //получаем твит с сервера
        yield put(setTweet(data[0]))
    } catch (error) {
        yield put(setLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest)
}
