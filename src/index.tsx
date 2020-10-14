//libraries
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
//css
import './index.css'
//component
import App from './App'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
)
