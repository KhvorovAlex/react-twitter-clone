//libraries
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//componenets
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
}))

function Preloader() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Preloader
