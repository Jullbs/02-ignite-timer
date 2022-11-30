// LIB, HOOKS, ETC
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

// COMPONENTS
import { CyclesContextProvider } from './contexts/CyclesContext'

// STYLE
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

// MAIN CODE
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
