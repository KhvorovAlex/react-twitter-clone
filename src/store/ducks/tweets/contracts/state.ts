export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum addTweetLoadingState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
    _id: string
    text: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export interface TweetsState {
    items: Tweet[]
    loadingState: LoadingState
    addTweetloadingState: addTweetLoadingState
}
