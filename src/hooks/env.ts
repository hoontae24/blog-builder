import env from "@/libs/env"
import { createContext, useContext } from "react"

const EnvContext = createContext<typeof env>(env)

export const EnvContextProvider = EnvContext.Provider

export const useEnv = (): typeof env => {
  return useContext(EnvContext)
}
