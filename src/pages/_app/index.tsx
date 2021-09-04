import { AppProps } from "next/dist/shared/lib/router/router"

import "./index.scss"

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
