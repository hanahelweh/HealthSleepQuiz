function Start({dispatch}) {
    async function handleStart(){
        const res=await fetch("http://localhost:8000/questions");
        const data=await res.json();
        dispatch({type:'start',payload:data})
    }
    return (
        <div className="container">
            <div className="start-image" style={{width:'50%', backgroundImage:"url('/images/pexels-ketut-subiyanto-4473863.jpg')"}}></div>
            <div className="vertical-center" style={{width:'50%'}}>
                <div className="intro">Rest Well</div>
                <div className="title">Sleep Quality Check</div>
                <div className="description">Gain insights into your sleep habits with our comprehensive sleep monitoring quiz!</div>
                <button onClick={handleStart} className="btn">Let's Start</button>
            </div>
        </div>
    )
}

export default Start;
