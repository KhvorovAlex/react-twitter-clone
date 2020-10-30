import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { addTweetLoadingState, LoadingState, TweetsState } from './contracts/state'

const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectTweetsItem = createSelector(selectTweets, tweets => tweets.items)

export const selectLoadingState = (state: RootState): boolean =>
    selectTweets(state).loadingState === LoadingState.LOADED

export const selectAddTweetLoadingState = (state: RootState): addTweetLoadingState =>
    selectTweets(state).addTweetloadingState
