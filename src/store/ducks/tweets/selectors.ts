import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { LoadingState, TweetsState } from './contracts/state'

const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectTweetsItem = createSelector(selectTweets, tweets => tweets.items)

export const selectLoadingState = (state: RootState): boolean =>
    selectTweets(state).loadingState === LoadingState.LOADED
