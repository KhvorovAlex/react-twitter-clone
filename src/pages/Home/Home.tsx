//libraries
import React from 'react'
//style
import { useHomeStyles } from './useHomeStyle'
//components
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { SideMenu } from '../../components/SideMenu'

export const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu />
                </Grid>
                <Grid sm={8} md={6} item>
                    середина
                </Grid>

                <Grid sm={3} md={3} item>
                    3 столбец
                </Grid>
            </Grid>
        </Container>
    )
}
