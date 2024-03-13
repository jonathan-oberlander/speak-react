import { useCallback, useEffect, useReducer } from "react"
import { useUtterrance } from "./utterance"

import "./App.css"

export function Synth() {
  const utterance = useUtterrance()
  const [{ lang, languages, voice, voices }, setState] = useSynthState()

  const allVoicesObtained = useCallback(
    () =>
      new Promise<SpeechSynthesisVoice[]>((resolve) => {
        let voices = window.speechSynthesis.getVoices()

        if (voices.length !== 0) {
          resolve(voices)
        } else {
          window.speechSynthesis.addEventListener("voiceschanged", () => {
            voices = window.speechSynthesis.getVoices()
            resolve(voices)
          })
        }
      }),
    [],
  )

  useEffect(() => {
    allVoicesObtained().then((voices) => {
      setState({ voices })

      const langSet = new Set<string>()

      for (const voice of voices) {
        langSet.add(voice.lang)
      }

      setState({ languages: Array.from(langSet.values()) })

      utterance.voice = voices[0]
    })
  }, [allVoicesObtained, setState, utterance])

  const selectVoice = (name: string) => {
    const newVoice =
      voices?.find((voice) => voice.name === name) ?? voices?.[0]!
    setState({ voice: newVoice })
    utterance.voice = newVoice
  }

  const selectLang = (lang: string) => {
    const newVoices = voices?.filter((voice) => voice.lang === lang)
    setState({ lang, voice: newVoices?.[0] })
    selectVoice(newVoices?.[0].name!)
  }

  return (
    <div style={{ display: "flex", gap: "10px", height: "20px" }}>
      <select
        name="lmaguage"
        value={lang}
        onChange={(e) => selectLang(e.currentTarget.value)}
      >
        {languages?.sort().map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <select
        name="voice"
        value={voice?.name}
        onChange={(e) => selectVoice(e.currentTarget.value)}
      >
        {voices
          ?.filter((voice) => voice.lang === lang)
          ?.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
      </select>
    </div>
  )
}

type SynthState = {
  lang: string
  languages: string[]
  voice: SpeechSynthesisVoice | undefined
  voices: SpeechSynthesisVoice[]
}

type ReducerFunction<T> = (c: Partial<T>, u: Partial<T>) => Partial<T>

type SynthReducer = ReducerFunction<SynthState>

const useSynthState = () =>
  useReducer<SynthReducer>((state, update) => ({ ...state, ...update }), {
    lang: "en-GB",
    languages: [""],
    voice: undefined,
    voices: [],
  })
