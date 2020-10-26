import produce, { Draft } from 'immer'
import { TweetActions, TweetActionsType } from './actionCreators'

import { TweetState, LoadingState } from './contracts/state'

//Начальное состояние
const initialTweetState: TweetState = { data: undefined, loadingState: LoadingState.NEVER }

//Редюсер
export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
    switch (action.type) {
        case TweetActionsType.SET_TWEET:
            draft.data = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case TweetActionsType.FETCH_TWEET:
            draft.data = undefined
            draft.loadingState = LoadingState.LOADING
            break

        case TweetActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break

        default:
            break
    }
}, initialTweetState)
