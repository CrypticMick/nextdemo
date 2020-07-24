import {customTheme} from '../theme'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={customTheme}>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      );
};