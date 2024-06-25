import {ThemeProvider } from 'styled-components'
import {GlobalStyle } from './styles/global'
import {defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routes'

export function App () {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </ThemeProvider>
    )
}