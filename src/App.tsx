import React, { useEffect, useState } from 'react'
import words from "./wordList.json"
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex];
  })


 const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

function addGuessedLetter(letter: string){
  if(guessedLetters.includes(letter)){
    return
  }

  setGuessedLetters(currentLetters => [...currentLetters, letter]) 33:27

}


useEffect(() => {
  const handler = (event: KeyboardEvent) => {
    const key = event.key
    if(key.match(/[a-z]/)){
      return;
  }

  
  event.preventDefault()

  addGuessedLetter(key)

}




  document.addEventListener("keypress", handler)

  return () => {
    document.removeEventListener("keypress", handler)
  }

}, [])


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
      <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess = {wordToGuess} />
      
      <div style={{alignSelf:"stretch"}}>
      <Keyboard />
      </div>

    </div>
  )
}

export default App
