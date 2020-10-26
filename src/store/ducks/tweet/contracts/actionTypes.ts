import { Action } from 'redux'
import { TweetState } from '../../tweet/contracts/state'
import { Tweet } from '../../tweets/contracts/state'
import { TweetActionsType } from '../actionCreators'
import { LoadingState } from './state'

export interface SetTweetActionIT extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET
    payload: TweetState['data']
}

export interface FetchTweetActionIT extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET
    payload?: Tweet['_id']
}

export interface SetTweetLoadingStateActionIT extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE
    payload: LoadingState
}
