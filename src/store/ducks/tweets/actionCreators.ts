import {
    FetchAddTweetActionIT,
    FetchTweetsActionIT,
    SetAddTweetLoadingStateActionIT,
    SetFetchAddTweetActionIT,
    SetTweetsActionIT,
    SetTweetsLoadingStateActionIT,
} from './contracts/actionTypes'
import { addTweetLoadingState, LoadingState, Tweet, TweetsState } from './contracts/state'

//actions types
export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    SET_FETCH_ADD_TWEET = 'tweets/SET_FETCH_ADD_TWEET',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    SET_ADD_TWEET_LOADING_STATE = 'tweets/SET_ADD_TWEET_LOADING_STATE',
}

//actions
export const setTweets = (payload: TweetsState['items']): SetTweetsActionIT => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const fetchTweets = (): FetchTweetsActionIT => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionIT => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
})

export const setFetchAddTweet = (payload: Tweet): SetFetchAddTweetActionIT => ({
    type: TweetsActionsType.SET_FETCH_ADD_TWEET,
    payload,
})

export const setLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionIT => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
})

export const setAddTweetLoadingState = (
    payload: addTweetLoadingState
): SetAddTweetLoadingStateActionIT => ({
    type: TweetsActionsType.SET_ADD_TWEET_LOADING_STATE,
    payload,
})
