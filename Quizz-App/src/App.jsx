import "./App.css";
import React, {useState} from "react";
import { useContext } from "react";
import MainMenu from "./components/MainMenu";
import Quizz from "./components/Quizz";
import EndScreen from "./components/EndScreen";
import {QuizContext} from "./Helpers/Contexts"

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return(
  <div className="App">
    <h1>Quizz App</h1>
    
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

    {gameState === "menu" && <MainMenu/>}
    {gameState === "Quizz" && <Quizz/>}
    {gameState === "EndScreen" && <EndScreen/>}
    </QuizContext.Provider>

  </div>
 );
}

export default App
