//libraries
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import classNames from 'classnames'
//components
import { Avatar, IconButton, Paper, Typography } from '@material-ui/core'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'

const useStylesTweet = makeStyles(theme => ({
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    tweetUserName: {
        color: grey[500],
    },
}))

interface TweetProps {
    _id: string
    text: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export const Tweet: React.FC<TweetProps> = ({
    _id,
    text,
    user,
}: TweetProps): React.ReactElement => {
    const classes = useStylesTweet()

    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя ${user.fullName}`}
                    src={user.avatarUrl}
                />
                <div>
                    <Typography>
                        <b>{user.fullName}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <CommentIcon style={{ fontSize: 20 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepostIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <LikeIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <ShareIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
        </Link>
    )
}
