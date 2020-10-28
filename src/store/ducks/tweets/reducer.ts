import produce, { Draft } from 'immer'
import { TweetsActions, TweetsActionsType } from './actionCreators'

import { TweetsState, LoadingState } from './contracts/state'

//Начальное состояние
const initialTweetsState: TweetsState = { items: [], loadingState: LoadingState.NEVER }

//Редюсер
export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break

        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break

        case TweetsActionsType.SET_FETCH_ADD_TWEET:
            draft.items.push(action.payload)
            draft.loadingState = LoadingState.LOADED
            break

        default:
            break
    }
}, initialTweetsState)
