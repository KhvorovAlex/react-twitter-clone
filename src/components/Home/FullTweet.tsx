//libraries
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchTweet, setTweet } from '../../store/ducks/tweet/actionCreators'
import { selectLoadingState, selectTweetData } from '../../store/ducks/tweet/selectors'
import Preloader from '../Preloader'
//components
import { Tweet } from './Tweet'

const FullTweet: React.FC = (): React.ReactElement | null => {
    const dispatch = useDispatch()
    const tweet = useSelector(selectTweetData)
    const isLoaded = useSelector(selectLoadingState)
    const params: { id?: string } = useParams()
    const id = params.id

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweet(id))
        }
        return () => {
            dispatch(setTweet(undefined))
        }
    }, [dispatch, id])

    if (!isLoaded) {
        return <Preloader />
    }

    if (isLoaded && tweet) {
        return <Tweet {...tweet} />
    }

    return null
}

export default FullTweet
