import Options from "../Options"
function Question({question,index,numQuestions,dispatch,selectedOption}) {
    return (
        <div className="component-container">
            <div className="vertical-center">
                <div className="intro">Question {index+1} out of {numQuestions}</div>
                <div className="title">{question.question}</div>
                <Options selectedOption={selectedOption} dispatch={dispatch} options={question.options}/>
                {selectedOption!==null && index+1 !== numQuestions && <button className="btn w100" onClick={()=>dispatch({type:'next'})}>Next</button>}
                {selectedOption!==null && index+1 === numQuestions && <button className="btn w100" onClick={()=>dispatch({type:'result'})}>Tap To See Result</button>}
            </div>
        </div>
    )
}

export default Question
