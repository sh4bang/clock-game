import { useState } from "react"
import { GameContext } from "../contexts/GameContext"

export const GameProvider = ({ children }) => {
  const [mode, setMode] = useState("live")
  const [difficulty, setDifficulty] = useState("beginner")
  const [format, setFormat] = useState("12")

  const value = {
    mode,
    setMode,
    difficulty,
    setDifficulty,
    format,
    setFormat,
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}