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
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
}))

interface ModalBlockRegisterProps {
    visible: boolean
    onClose: () => void
}

export const ModalBlockRegister: React.FC<ModalBlockRegisterProps> = ({
    visible = false,
    onClose,
}: ModalBlockRegisterProps): ReactElement => {
    const classes = useStylesSignIn()

    return (
        <ModalBlock visible={visible} onClose={onClose} title='Создайте учетную запись'>
            <FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
                <FormGroup aria-label='position' row>
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id='name'
                        label='Имя'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='filled'
                        type='name'
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
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
                        className={classes.registerField}
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
                        Далее
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>
    )
}
