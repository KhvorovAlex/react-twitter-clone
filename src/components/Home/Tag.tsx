//libraries
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
//components
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const useStylesTag = makeStyles(() => ({
    tag: {
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

interface TagProps {
    _id: string
    name: string
    likesCount: number
}

export const Tag: React.FC<TagProps> = ({
    _id,
    name,
    likesCount,
}: TagProps): React.ReactElement => {
    const classes = useStylesTag()

    return (
        <React.Fragment key={_id}>
            <ListItem className={classes.tag}>
                <Link to={`/home/search?q=`}>
                    <ListItemText
                        primary={name}
                        secondary={
                            <Typography component='span' variant='body2' color='textSecondary'>
                                Твитов: {likesCount}
                            </Typography>
                        }
                    />
                </Link>
            </ListItem>
            <Divider component='li' />
        </React.Fragment>
    )
}
