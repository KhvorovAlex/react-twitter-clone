import {
    FetchTweetsActionIT,
    SetTweetsActionIT,
    SetTweetsLoadingStateActionIT,
} from './contracts/actionTypes'
import { LoadingState, TweetsState } from './contracts/state'

//actions types
export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

//actions
export const setTweets = (payload: TweetsState['items']): SetTweetsActionIT => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const fetchTweets = (): FetchTweetsActionIT => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const setLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionIT => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
})

export type TweetsActions = SetTweetsActionIT | SetTweetsLoadingStateActionIT | FetchTweetsActionIT
