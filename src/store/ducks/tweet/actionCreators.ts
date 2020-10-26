import { Tweet } from '../tweets/contracts/state'
import {
    FetchTweetActionIT,
    SetTweetActionIT,
    SetTweetLoadingStateActionIT,
} from './contracts/actionTypes'
import { LoadingState, TweetState } from './contracts/state'

//actions types
export enum TweetActionsType {
    SET_TWEET = 'tweet/SET_TWEET',
    FETCH_TWEET = 'tweet/FETCH_TWEET',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

//actions
export const setTweet = (payload: TweetState['data']): SetTweetActionIT => ({
    type: TweetActionsType.SET_TWEET,
    payload,
})

export const fetchTweet = (payload: Tweet['_id']): FetchTweetActionIT => ({
    type: TweetActionsType.FETCH_TWEET,
    payload,
})

export const setLoadingState = (payload: LoadingState): SetTweetLoadingStateActionIT => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload,
})

export type TweetActions = SetTweetActionIT | SetTweetLoadingStateActionIT | FetchTweetActionIT
