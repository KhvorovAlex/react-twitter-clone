//libraries
import React from 'react'
import { makeStyles } from '@material-ui/core'
//components
import { Container, Grid } from '@material-ui/core'
import { SideMenu } from '../components/Home/SideMenu'
import { RightBlock } from '../components/Home/RightBlock'
import { TwitsBlock } from '../components/Home/TwitsBlock'

const useStylesHome = makeStyles(() => ({
    wrapper: {
        height: '100vh',
    },
}))

export const Home = () => {
    const classes = useStylesHome()

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu />
                </Grid>

                <Grid sm={8} md={6} item>
                    <TwitsBlock />
                </Grid>

                <Grid sm={3} md={3} item>
                    <RightBlock />
                </Grid>
            </Grid>
        </Container>
    )
}
