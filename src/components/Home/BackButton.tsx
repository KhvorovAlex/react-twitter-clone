//librareis
import React from 'react'
import { useHistory } from 'react-router-dom'
//components
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory()

    const handleClick = () => {
        history.goBack()
    }

    return (
        <IconButton onClick={handleClick} style={{ marginRight: 20 }} color='primary'>
            <ArrowBackIcon />
        </IconButton>
    )
}
