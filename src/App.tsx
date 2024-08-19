import React, { useState } from 'react'
import words from "./wordList.json"

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex];
  })


 const [guessedLetters, setGuessedLetters] = useState<string[]>([]);




  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}>

      <div style={{ fontSize: "2rem", textAlign: "center"}}>
        Lose
        Win
      </div>

    </div>
  )
}

export default App
