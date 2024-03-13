import { useEffect, useState } from "react"
import { Pause, Play, Stop } from "./icons"
import { useUtterrance } from "./utterance"

import "./App.css"

type SpeachConfig = {
  text: string
  pitch: number
  rate: number
  volume: number
}

export function useSpeech() {
  const utterance = useUtterrance()

  const [{ speaking, paused, currentWord }, setState] = useState({
    speaking: false,
    paused: false,
    currentWord: "",
  })

  const speak = ({ text, pitch, rate, volume }: SpeachConfig) => {
    utterance.text = text
    utterance.pitch = pitch
    utterance.rate = rate
    utterance.volume = volume

    speechSynthesis.speak(utterance)
    setState((s) => ({ ...s, speaking: true }))

    let pointer = -1
    const words = text.split(" ")

    utterance.addEventListener("boundary", () => {
      pointer++
      setState((s) => ({ ...s, currentWord: words[pointer] }))
    })
  }

  const pause = () => {
    speechSynthesis.pause()
    setState((s) => ({ ...s, paused: true }))
  }

  const resume = () => {
    speechSynthesis.resume()
    setState((s) => ({ ...s, paused: false }))
  }

  const stop = () => {
    speechSynthesis.cancel()
    setState((s) => ({ ...s, speaking: false }))
  }

  useEffect(() => {
    const cb = () => {
      setState((s) => ({ ...s, speaking: false, currentWord: "" }))
    }

    utterance.addEventListener("end", cb)

    return () => {
      utterance.removeEventListener("end", cb)
    }
  }, [utterance])

  return {
    speak,
    pause,
    resume,
    stop,
    speaking,
    paused,
    currentWord,
  }
}

export function Player({ text }: { text: string }) {
  const [state, setState] = useState<Omit<SpeachConfig, "text">>({
    pitch: 1.0,
    rate: 1.0,
    volume: 0.5,
  })

  const { speak, pause, resume, stop, speaking, paused, currentWord } =
    useSpeech()

  const onClick = () => {
    !speaking && !paused
      ? speak({ text, ...state })
      : speaking && !paused
        ? pause()
        : !speaking && paused
          ? stop()
          : resume()
  }

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
      }}
    >
      <p style={{ fontSize: "32px" }}>{currentWord}</p>
      <div
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        <button type="button" onClick={onClick}>
          {!speaking || paused ? <Play /> : <Pause />}
        </button>
        <button type="button" onClick={stop}>
          <Stop />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <label>
          Rate
          <input
            type="number"
            value={state?.rate}
            step={0.1}
            onChange={(e) => {
              setState((s) => ({
                ...s,
                rate: Number(e.target.value ?? 0),
              }))
            }}
          />
        </label>
        <label>
          Pitch
          <input
            type="number"
            value={state?.pitch}
            step={0.1}
            onChange={(e) => {
              setState((s) => ({
                ...s,
                pitch: Number(e.target.value ?? 0),
              }))
            }}
          />
        </label>
      </div>
    </div>
  )
}
