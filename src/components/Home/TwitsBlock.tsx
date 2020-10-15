//libraries
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Route } from 'react-router-dom'
//components
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { BackButton } from './BackButton'
import { Tweet } from './Tweet'
import { AddTweetForm } from './AddTweetForm'

const useStylesTwitsBlock = makeStyles(() => ({
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
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
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetsHeaderBackButton: {
        marginRight: 20,
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
    addForm: {
        padding: 20,
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
}))

export const TwitsBlock: React.FC = (): React.ReactElement => {
    const classes = useStylesTwitsBlock()

    return (
        <Paper className={classes.tweetsWrapper} variant='outlined'>
            {/* header: меняется в зависимости от url */}
            <Paper className={classes.tweetsHeader} variant='outlined'>
                <Route path='/home/:any'>
                    <BackButton />
                </Route>

                <Route path={['/', '/home/search']} exact>
                    <Typography variant='h6'>Твиты</Typography>
                </Route>

                <Route path='/home/tweet'>
                    <Typography variant='h6'>Твитнуть</Typography>
                </Route>
            </Paper>

            {/* Блок для написания Твита */}
            <Route path={['/', '/home/search']} exact>
                <Paper>
                    <div className={classes.addForm}>
                        <AddTweetForm />
                    </div>
                    <div className={classes.addFormBottomLine} />
                </Paper>
            </Route>

            {/* Все Твиты */}
            <Route path='/' exact>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </Route>
        </Paper>
    )
}
