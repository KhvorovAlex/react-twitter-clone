import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { LoadingState, TagsState } from './contracts/state'

const selectTags = (state: RootState): TagsState => state.tags

export const selectTagsItem = createSelector(selectTags, tags => tags.items)

export const selectLoadingState = (state: RootState): boolean =>
    selectTags(state).loadingState === LoadingState.LOADED
