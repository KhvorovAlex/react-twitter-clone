//libraries
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core'
//components
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
//actions
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators'
import Alert from '@material-ui/lab/Alert'
//selectors
import { selectAddTweetLoadingState } from '../../store/ducks/tweets/selectors'
//selectors Types
import { addTweetLoadingState } from '../../store/ducks/tweets/contracts/state'

const useStyleAddTweetForm = makeStyles(theme => ({
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
}))

interface AddTweetFormProps {
    maxRows?: number
}

const MAX_LENGHT = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
    maxRows,
}: AddTweetFormProps): React.ReactElement => {
    const classes = useStyleAddTweetForm()
    const dispatch = useDispatch()
    const addTweetState = useSelector(selectAddTweetLoadingState)
    const [text, setText] = React.useState<string>('')
    const textLimitPercent = Math.round((text.length / MAX_LENGHT) * 100)
    const textCount = MAX_LENGHT - text.length

    const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text))
        setText('')
    }

    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src='https://avatars1.githubusercontent.com/u/67139971?s=460&u=5f2ee9216515ac52ac07fb732d48efe69114f600&v=4'
                />
                <TextareaAutosize
                    onChange={handleChangeTextArea}
                    className={classes.addFormTextarea}
                    placeholder='Что происходит?'
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color='primary'>
                        <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color='primary'>
                        <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant='static'
                                    size={20}
                                    thickness={5}
                                    value={text.length > MAX_LENGHT ? 100 : textLimitPercent}
                                    style={text.length > MAX_LENGHT ? { color: 'red' } : undefined}
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                    variant='static'
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        style={{ width: '102px' }}
                        onClick={handleClickAddTweet}
                        disabled={
                            addTweetState === addTweetLoadingState.LOADING ||
                            !text ||
                            text.length > MAX_LENGHT
                        }
                        color='primary'
                        variant='contained'
                    >
                        {addTweetState === addTweetLoadingState.LOADING ? (
                            <CircularProgress color='inherit' size={16} />
                        ) : (
                            'Твитнуть'
                        )}
                    </Button>
                </div>
            </div>

            {addTweetState === addTweetLoadingState.ERROR && (
                <Alert severity='error'>
                    Ошибка при добавлении твита{' '}
                    <span aria-label='emoji-plak' role='img'>
                        😞
                    </span>
                </Alert>
            )}
        </div>
    )
}
