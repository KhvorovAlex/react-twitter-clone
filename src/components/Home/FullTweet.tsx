//libraries
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
//actions
import { fetchTweet, setTweet } from '../../store/ducks/tweet/actionCreators'
//seelctors
import { selectLoadingState, selectTweetData } from '../../store/ducks/tweet/selectors'
//components
import Preloader from '../Preloader'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const useStylesFullTwitBlock = makeStyles(theme => ({
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    fullTweet: {
        padding: 22,
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
    },
}))

const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useStylesFullTwitBlock()
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
        return (
            <Paper className={classes.fullTweet}>
                <div className={classes.tweetsHeaderUser}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${tweet.user.fullName}`}
                        src={tweet.user.avatarUrl}
                    />
                    <Typography component='div'>
                        <b>{tweet.user.fullName}</b>&nbsp;
                        <div>
                            <span className={classes.tweetUserName}>@{tweet.user.userName}</span>
                            &nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweet.text}
                </Typography>
            </Paper>
        )
    }

    return null
}

export default FullTweet
