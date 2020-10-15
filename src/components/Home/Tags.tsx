//libraries
import React from 'react'
import { Link } from 'react-router-dom'
//components
import { makeStyles, Paper, Typography } from '@material-ui/core'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import Divider from '@material-ui/core/Divider/Divider'

const useStylesTags = makeStyles(() => ({
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

export const Tags: React.FC = (): React.ReactElement => {
    const classes = useStylesTags()

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                <React.Fragment>
                    <ListItem className={classes.rightSideBlockItem}>
                        <Link to={`/home/search?q=`}>
                            <ListItemText
                                primary={`name`}
                                secondary={
                                    <Typography
                                        component='span'
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        Твитов: 0
                                    </Typography>
                                }
                            />
                        </Link>
                    </ListItem>
                    <Divider component='li' />
                </React.Fragment>
            </List>
        </Paper>
    )
}
