import produce, { Draft } from 'immer'
import { TweetsActionsType } from './actionCreators'
import { TweetsActions } from './contracts/actionTypes'

import { TweetsState, LoadingState, addTweetLoadingState } from './contracts/state'

//Начальное состояние
const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    addTweetloadingState: addTweetLoadingState.NEVER,
}

//Редюсер
export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        // работаем с твитами
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break

        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break

        // работаем с твитом
        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addTweetloadingState = addTweetLoadingState.LOADING
            break

        case TweetsActionsType.SET_FETCH_ADD_TWEET:
            draft.items.push(action.payload)
            draft.addTweetloadingState = addTweetLoadingState.NEVER
            break

        case TweetsActionsType.SET_ADD_TWEET_LOADING_STATE:
            draft.addTweetloadingState = addTweetLoadingState.ERROR
            break

        default:
            break
    }
}, initialTweetsState)
