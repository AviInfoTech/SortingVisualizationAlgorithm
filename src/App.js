
import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import DisplayAlgo from "./components/pages/DisplayAlgo";
import { useStopwatch } from 'react-timer-hook';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App(props) {
  var array = [29, 72, 98, 14, 92, 56, 9, 88, 5, 1]
  const [arr, setArr] = useState(array);
  const [arrswap, setArrswap] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [movesCount, setMovesCount] = useState(0);

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(true);


  const BubbleSort = () => {
    let interval = null;
    // setTimerOn(true)
    // if (timerOn) {
    console.log("Started")
    interval = setInterval(function () {
      console.log("TimeInterval")
      setTime(time + 10);
    }, 10);
    console.log(interval)
    // }
    let timeout = 1000;
    let l = arr.length;
    if (l === 0)
      alert("Array is empty.....")
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
            setMovesCount(prevCount => prevCount + 1);
            setArrswap([...b])
            setArr([...temp])
            let complete = []
            for (let k = l; k >= l - i; k--) {
              complete.push(k);
            }
            setCompleted([...complete])
          }, timeout += 1000)
        }
        // setTimerOn(false)
      }
    }

    clearInterval(interval);
  }
  //---------------------------------------------------------------------------------------
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={() => (<DisplayAlgo title="Bubble Sort" completed={completed} arrswap={arrswap} array={arr} onhandleClick={BubbleSort} moves={movesCount} timer={time} />)} />
          <Route exact path="/Selection" component={() => (<DisplayAlgo title="Selection Sort" completed={completed} arrswap={arrswap} array={arr} onhandleClick={BubbleSort} moves={movesCount} />)} />
          <Route exact path="/Insertion" component={() => (<DisplayAlgo title="Insertion Sort" completed={completed} arrswap={arrswap} array={arr} onhandleClick={BubbleSort} moves={movesCount} />)} />
          <Route exact path="/heap" component={() => (<DisplayAlgo title="Heap Sort" completed={completed} arrswap={arrswap} array={arr} onhandleClick={BubbleSort} moves={movesCount} />)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
