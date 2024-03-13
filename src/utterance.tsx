import { type PropsWithChildren, createContext, useContext } from "react"
import "./App.css"

const defaultUtterance = { utterance: new SpeechSynthesisUtterance() }
const UtteranceContext = createContext(defaultUtterance)

export function UterranceProvider({ children }: PropsWithChildren) {
  return (
    <UtteranceContext.Provider value={defaultUtterance}>
      {children}
    </UtteranceContext.Provider>
  )
}

export function useUtterrance() {
  const ctx = useContext(UtteranceContext)

  if (!UtteranceContext) {
    throw "no utterance context"
  }

  return ctx.utterance
}
