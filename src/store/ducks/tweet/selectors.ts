import { RootState } from '../../store'
import { LoadingState, TweetState } from './contracts/state'

const selectTweet = (state: RootState): TweetState => state.tweet

export const selectTweetData = (state: RootState): TweetState['data'] => selectTweet(state).data

export const selectLoadingState = (state: RootState): boolean =>
    selectTweet(state).loadingState === LoadingState.LOADED
