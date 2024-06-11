function Options({options,selectedOption,dispatch}) {
    return (
        <div className="options">
            {options.map((option,answerId)=><div className={`option ${answerId===selectedOption ? 'selected' : ''}`} onClick={()=>dispatch({type:'answer',payload:answerId})}>{option.option}</div>)}
        </div>
    )
}

export default Options
