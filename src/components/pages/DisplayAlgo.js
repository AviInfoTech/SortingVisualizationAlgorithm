import React, { useState } from "react";



function DisplayAlgo(props) {
    const [timeShow, setTimeShow] = useState(0)
    const { title, completed, arrswap, array, onhandleClick, moves, timer } = props;

    return (
        <div>

            {/* <Stopwatch /> */}
            <center style={{ marginTop: 50 }}><h1>{title}</h1></center>
            <div className="container2">
                <div className="counter"><h2 title="Counter">Moves: {moves}</h2>
                    <h2 style={{ marginLeft: 250 }}>
                        <div >Time:
                            <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
                            <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
                        </div>
                    </h2>
                </div>
                <div className="grid">
                    {array.map((data, id) => (
                        <div key={id} style={{ backgroundColor: arrswap.includes(id) ? "green" : completed.includes(id) ? "green" : "white" }}>
                            {data}
                        </div>
                    ))}
                </div>
                <center ><button onClick={onhandleClick}>Click here for sorting</button></center>
                <hr />
            </div>
        </div >
    )
}

export default DisplayAlgo
