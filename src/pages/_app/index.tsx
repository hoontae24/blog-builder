import { AppProps } from "next/dist/shared/lib/router/router"

import { EnvContextProvider } from "@/hooks/env"
import env from "@/libs/env"

import "./index.scss"

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps, env }: AppProps) => {
  return (
    <EnvContextProvider value={env}>
      <Component {...pageProps} />
    </EnvContextProvider>
  )
}

App.getInitialProps = async () => {
  return { env: env }
}

export default App
