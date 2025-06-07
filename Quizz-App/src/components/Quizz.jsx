import React, {useState} from "react";
import { Questions } from '../Helpers/QuestionBank';
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import EndScreen from "./EndScreen";


function Quizz(){
    const {gameState, setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        console.log(score);
        setCurrQuestion(currQuestion + 1);


    };

    const finishQuiz = () => {
         if(Questions[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setGameState("gameState");
    };
    return(
        <div className="quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion == Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )};
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    );
}

export default Quizz