import { Action } from 'redux'
import { TweetsActionsType } from '../actionCreators'
import { LoadingState, TweetsState } from './state'

export interface SetTweetsActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}

export interface FetchTweetsActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}

export interface SetTweetsLoadingStateActionIT extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE
    payload: LoadingState
}
