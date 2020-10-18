//libraries
import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core'
//component
import { Button } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import { ModalBlock } from '../ModalBlock'

const useStylesSignIn = makeStyles(theme => ({
    loginSideField: {
        marginBottom: 18,
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
}))

interface ModalBlockLoginProps {
    visible: boolean
    onClose: () => void
}

export const ModalBlockLogin: React.FC<ModalBlockLoginProps> = ({
    visible = false,
    onClose,
}: ModalBlockLoginProps): ReactElement => {
    const classes = useStylesSignIn()

    return (
        <ModalBlock visible={visible} onClose={onClose} title='Войти в аккаунт'>
            <FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
                <FormGroup aria-label='position' row>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id='email'
                        label='E-Mail'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='filled'
                        type='email'
                        fullWidth
                    />
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id='password'
                        label='Пароль'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='filled'
                        type='password'
                        fullWidth
                    />
                    <Button variant='contained' color='primary' fullWidth>
                        Войти
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>
    )
}
