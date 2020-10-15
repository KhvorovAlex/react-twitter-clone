//librareis
import React from 'react'
//components
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const BackButton: React.FC = (): React.ReactElement => {
    return (
        <IconButton style={{ marginRight: 20 }} color='primary'>
            <ArrowBackIcon />
        </IconButton>
    )
}
