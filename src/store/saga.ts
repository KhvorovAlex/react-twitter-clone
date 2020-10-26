//saga-effects
import { all } from 'redux-saga/effects'
//sagas
import { tagsSaga } from './ducks/tags/sagas'
import { tweetSaga } from './ducks/tweet/sagas'
import { tweetsSaga } from './ducks/tweets/sagas'

export default function* rootSaga() {
    yield all([tweetsSaga(), tagsSaga(), tweetSaga()])
}
