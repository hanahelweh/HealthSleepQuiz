function Result({points,numPoints,dispatch}) {
    let percentage=(points/numPoints)*100;
    let result;
    if (percentage >= 20 && percentage < 40) {
        result = "You don't sleep well.";
    } else if (percentage >= 40 && percentage < 60) {
        result = "Your sleep is average.";
    } else if (percentage >= 60 && percentage < 80) {
        result = "You sleep quite well.";
    } else if (percentage >= 80 && percentage <= 100) {
        result = "You have excellent sleep habits.";
    } else {
        result = "You might need to evaluate your sleep habits.";
    }
    return (
        <div className="component-container">
            <div className="result">
                <div className="title">Your Score is {points} out of {numPoints}</div>
                <div className="description">{result}</div>
            <button className="btn" onClick={()=>dispatch({type:'reset'})} style={{maxWidth:'250px'}}>Restart The Test</button>
            </div>
        </div>
    )
}

export default Result
