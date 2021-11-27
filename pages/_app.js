import GlobalStyles from "../styles/globalStyles";
import {ThemeProvider} from  "styled-components";


function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      {/* <ThemeProvider> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
