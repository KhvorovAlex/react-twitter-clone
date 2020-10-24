//libraries
import { call, put, takeEvery } from 'redux-saga/effects'
//server
import { tagsAPI } from '../../../api/tagsApi'
//actions
import { setLoadingState, setTags, TagsActionsType } from './actionCreators'
//state request
import { LoadingState } from './contracts/state'

// Запрашиваем актуальные темы с сервера
export function* fetchTagsRequest() {
    try {
        const data = yield call(tagsAPI.getTags) //получаем актуальные темы с сервера
        yield put(setTags(data))
    } catch (error) {
        yield put(setLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}
