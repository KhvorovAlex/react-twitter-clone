import {
    FetchTagsActionIT,
    SetTagsActionIT,
    SetTagsLoadingStateActionIT,
} from './contracts/actionTypes'
import { LoadingState, TagsState } from './contracts/state'

//actions types
export enum TagsActionsType {
    SET_TAGS = 'Tags/SET_TAGS',
    FETCH_TAGS = 'Tags/FETCH_TAGS',
    SET_LOADING_STATE = 'Tags/SET_LOADING_STATE',
}

//actions
export const setTags = (payload: TagsState['items']): SetTagsActionIT => ({
    type: TagsActionsType.SET_TAGS,
    payload,
})

export const fetchTags = (): FetchTagsActionIT => ({
    type: TagsActionsType.FETCH_TAGS,
})

export const setLoadingState = (payload: LoadingState): SetTagsLoadingStateActionIT => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload,
})

export type TagsActions = SetTagsActionIT | SetTagsLoadingStateActionIT | FetchTagsActionIT
