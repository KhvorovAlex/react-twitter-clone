//libraries
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//components
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List/List'
//actions
import { fetchTags } from '../../store/ducks/tags/actionCreators'
//selectors
import { selectLoadingState, selectTagsItem } from '../../store/ducks/tags/selectors'
import { Tag } from './Tag'

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
}))

export const Tags: React.FC = (): React.ReactElement | null => {
    const classes = useStylesTags()

    const dispatch = useDispatch()
    const tags = useSelector(selectTagsItem)
    const isLoaded = useSelector(selectLoadingState)

    React.useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    if (!isLoaded) {
        return null
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {tags.map(tag => (
                    <Tag key={tag._id} {...tag} />
                ))}
            </List>
        </Paper>
    )
}
