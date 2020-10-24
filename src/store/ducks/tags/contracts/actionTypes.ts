import { Action } from 'redux'
import { TagsActionsType } from '../actionCreators'
import { LoadingState, TagsState } from './state'

export interface SetTagsActionIT extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS
    payload: TagsState['items']
}

export interface FetchTagsActionIT extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS
}

export interface SetTagsLoadingStateActionIT extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE
    payload: LoadingState
}
