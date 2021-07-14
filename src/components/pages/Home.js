import React, { useState } from "react";

export default function Home() {
    var array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const [arr, setArr] = useState(array);
    const [arrswap, setArrswap] = useState([]);
    const [completed, setCompleted] = useState([]);

    function Sort() {
        let timeout = 1000;
        let l = arr.length;
        if (l === 0)
            alert("error")
        else {
            let temp = [...arr];
            for (let i = 0; i < l - 1; i++) {
                for (let j = 0; j < (l - i - 1); j++) {
                    setTimeout(() => {
                        const b = []
                        b.push(j)
                        b.push(j + 1)
                        if (temp[j] > temp[j + 1]) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }

                        setArrswap([...b])
                        setArr([...temp])
                        let com = []
                        for (let k = l; k >= l - i; k--) {
                            com.push(k);
                        }
                        setCompleted([...com])
                    }, timeout += 3000)
                }
            }
        }
    }
    return (
        <div>
            <div className="container2">
                <div className="grid">
                    {arr.map((data, id) => (
                        <div
                            key={id}
                            style={{
                                backgroundColor: arrswap.includes(id) ? "green" :
                                    completed.includes(id) ? "red" : "white"
                            }}>{data}</div>
                    ))}
                </div>
                <center >
                    <button onClick={() => Sort()}>Sort()</button>
                </center>
                <hr />
            </div>
        </div>
    )
}

