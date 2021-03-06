import { Action } from 'redux'
import { TweetsActionsType } from '../actionCreators'
import { addTweetLoadingState, LoadingState, Tweet, TweetsState } from './state'

export interface SetTweetsActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}

export interface SetFetchAddTweetActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_FETCH_ADD_TWEET
    payload: Tweet
}

export interface FetchTweetsActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}

export interface FetchAddTweetActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET
    payload: string
}

export interface SetTweetsLoadingStateActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export interface SetAddTweetLoadingStateActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_TWEET_LOADING_STATE
    payload: addTweetLoadingState
}

export type TweetsActions =
    | SetTweetsActionIT
    | SetTweetsLoadingStateActionIT
    | FetchTweetsActionIT
    | SetFetchAddTweetActionIT
    | FetchAddTweetActionIT
    | SetAddTweetLoadingStateActionIT
