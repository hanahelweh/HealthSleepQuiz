import { useEffect, useReducer } from "react";
import "./App.css";
import Start from "./components/Start";
import Result from "./components/Result";
import Question from "./components/Question";

const initialState={
  questions:[],
  status:'loading',
  index:0,
  points:0,
  selectedOption:null
}
function reducer(state,action){
  switch(action.type){
    case 'start':
      return {...state,status:'ready',questions:action.payload};
    case 'answer':
      return {...state,selectedOption:action.payload};
    case 'next':
      const question=state.questions[state.index];
      const option = question.options[state.selectedOption];
      return {...state,points:state.points+option.point,index:state.index+1,selectedOption:null};
    case 'result':
      return {...state,status:'result'};
    case 'reset':
      return {...initialState,status:'ready',questions:state.questions}
    default: throw new Error ("Undefined Action");
  }
} 
function App() {
  const [{status,questions,index,points,selectedOption},dispatch]=useReducer(reducer,initialState);
  const numQuestions=questions.length;
  const numPoints = numQuestions*4;
  return (
    <div className="app">
      {status==='loading' && <Start dispatch={dispatch}/>}
      {status==='ready' && <>
        <progress className="progress" max={numQuestions} value={index+1}/>
        <Question selectedOption={selectedOption} points={points} index={index} numQuestions={numQuestions} question={questions[index]} dispatch={dispatch}/>
      </>}
      {status==='result' && <Result points={points} numPoints={numPoints} dispatch={dispatch}/>}
    </div>
  )
}

export default App
