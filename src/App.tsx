import { type PropsWithChildren, useState } from "react"
import "./App.css"
import { Player } from "./player"
import { Synth } from "./synth"
import { UterranceProvider } from "./utterance"

function App() {
  return (
    <UterranceProvider>
      <Page>
        <Synth />
      </Page>
    </UterranceProvider>
  )
}

function Page({ children }: PropsWithChildren) {
  const [text, setText] = useState("")

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {children}
        <Player text={text} />
      </div>
      <textarea
        id="text"
        name="text"
        rows={15}
        cols={53}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  )
}

export default App
