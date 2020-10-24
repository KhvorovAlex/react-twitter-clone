//libraries
import React from 'react'
import { withStyles, Theme, makeStyles } from '@material-ui/core'
//components
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'
import ListItem from '@material-ui/core/ListItem/ListItem'
import Divider from '@material-ui/core/Divider/Divider'
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar/Avatar'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import List from '@material-ui/core/List/List'
import Button from '@material-ui/core/Button/Button'
import TextField from '@material-ui/core/TextField/TextField'
import { Tags } from './Tags'

const useStylesRightBlock = makeStyles(() => ({
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
}))

const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': { borderColor: 'transparent' },
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },
    },
}))(TextField)

export const RightBlock: React.FC = (): React.ReactElement => {
    const classes = useStylesRightBlock()

    return (
        <div className={classes.rightSide}>
            {/* Поиск по Твиттеру */}
            <SearchTextField
                variant='outlined'
                placeholder='Поиск по Твиттеру'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />

            {/* Актуальные темы */}
            <Tags />

            {/* Кого читать */}
            <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                    <b>Кого читать</b>
                </Paper>
                <List>
                    <ListItem className={classes.rightSideBlockItem}>
                        <ListItemAvatar>
                            <Avatar
                                alt='Remy Sharp'
                                src='https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg'
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary='Dock Of Shame'
                            secondary={
                                <Typography component='span' variant='body2' color='textSecondary'>
                                    @FavDockOfShame
                                </Typography>
                            }
                        />
                        <Button color='primary'>
                            <PersonAddIcon />
                        </Button>
                    </ListItem>
                    <Divider component='li' />
                </List>
            </Paper>
        </div>
    )
}
