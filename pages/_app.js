import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import StoreContextProvider from '../context/store'
import theme from '../constants/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StoreContextProvider>
        <Component {...pageProps} />
      </StoreContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
