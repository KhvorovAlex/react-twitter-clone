//libraries
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
//css
import './index.css'
//component
import App from './App'
//store
import { store } from './store/store'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
)
