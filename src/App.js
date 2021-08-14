import { useState } from 'react';
import './App.css';
import xo from './xo.png';
import ox from './ox.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const xoxarr = [];

const getRandomval = () => {
  const xoxoption = ["x", "o"];
  const random = Math.floor(Math.random() * xoxoption.length);
  return xoxoption[random]
}

for (let i = 0; i < 9; i++) {
  var rand = getRandomval()
  xoxarr.push({ "value": rand, "isHidden": true })
}

function App() {

  const [xoxar, setXoxar] = useState(xoxarr);
  const [btnDis, setBtnDis] = useState(false)

  const checkWin = () => {

    var obj = {}

    if (xoxar[0].isHidden === false && xoxar[0].value === "x" && xoxar[1].isHidden === false && xoxar[1].value === "x" && xoxar[2].isHidden === false && xoxar[2].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }
    else if (xoxar[0].isHidden === false && xoxar[0].value === "x" && xoxar[4].isHidden === false && xoxar[4].value === "x" && xoxar[8].isHidden === false && xoxar[8].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }
    else if (xoxar[2].isHidden === false && xoxar[2].value === "x" && xoxar[4].isHidden === false && xoxar[4].value === "x" && xoxar[6].isHidden === false && xoxar[6].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }
    else if (xoxar[3].isHidden === false && xoxar[3].value === "x" && xoxar[4].isHidden === false && xoxar[4].value === "x" && xoxar[5].isHidden === false && xoxar[5].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }
    else if (xoxar[6].isHidden === false && xoxar[6].value === "x" && xoxar[7].isHidden === false && xoxar[7].value === "x" && xoxar[8].isHidden === false && xoxar[8].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }
    else if (xoxar[0].isHidden === false && xoxar[0].value === "x" && xoxar[3].isHidden === false && xoxar[3].value === "x" && xoxar[6].isHidden === false && xoxar[6].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }
    else if (xoxar[1].isHidden === false && xoxar[1].value === "x" && xoxar[4].isHidden === false && xoxar[4].value === "x" && xoxar[7].isHidden === false && xoxar[7].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }
    else if (xoxar[2].isHidden === false && xoxar[2].value === "x" && xoxar[5].isHidden === false && xoxar[5].value === "x" && xoxar[8].isHidden === false && xoxar[8].value === "x") {
      obj["win"] = true
      obj["winner"] = "You"
      return obj
    }

    if (xoxar[0].isHidden === false && xoxar[0].value === "o" && xoxar[1].isHidden === false && xoxar[1].value === "o" && xoxar[2].isHidden === false && xoxar[2].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
    else if (xoxar[0].isHidden === false && xoxar[0].value === "o" && xoxar[4].isHidden === false && xoxar[4].value === "o" && xoxar[8].isHidden === false && xoxar[8].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
    else if (xoxar[2].isHidden === false && xoxar[2].value === "o" && xoxar[4].isHidden === false && xoxar[4].value === "o" && xoxar[6].isHidden === false && xoxar[6].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
    else if (xoxar[3].isHidden === false && xoxar[3].value === "o" && xoxar[4].isHidden === false && xoxar[4].value === "o" && xoxar[5].isHidden === false && xoxar[5].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
    else if (xoxar[6].isHidden === false && xoxar[6].value === "o" && xoxar[7].isHidden === false && xoxar[7].value === "o" && xoxar[8].isHidden === false && xoxar[8].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
    else if (xoxar[0].isHidden === false && xoxar[0].value === "o" && xoxar[3].isHidden === false && xoxar[3].value === "o" && xoxar[6].isHidden === false && xoxar[6].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
    else if (xoxar[1].isHidden === false && xoxar[1].value === "o" && xoxar[4].isHidden === false && xoxar[4].value === "o" && xoxar[7].isHidden === false && xoxar[7].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
    else if (xoxar[2].isHidden === false && xoxar[2].value === "o" && xoxar[5].isHidden === false && xoxar[5].value === "o" && xoxar[8].isHidden === false && xoxar[8].value === "o") {
      obj["win"] = true
      obj["winner"] = "XOXO"
      return obj
    }
  }

  const gameOver = (winner) => {
    if (winner.winner === "You") {
      toast.success("You won the game ✌");
    }
    else if (winner.winner === "Both") {
      toast.success("Both won the game ✌");
    }
    else {
      toast.success("XOXO won the game ✌");
    }

  }

  const checkNine = (winner) => {
    let cnt = 0
    for (let i = 0; i < 9; i++) {
      if (xoxar[i].isHidden === false) {
        cnt = Number(cnt) + 1
      }
    }
    if (cnt === 9) {
      if (!winner) {
        return true
      }
    }
    else {
      return false
    }
  }

  const xoxoMove = () => {
    let temparr = []
    for (let i = 0; i < 9; i++) {
      if (xoxar[i].isHidden === true) {
        temparr.push(i)
      }
    }
    if (temparr.length > 0) {
      const random = Math.floor(Math.random() * temparr.length);
      const rad = temparr[random]
      let newArr = [...xoxar]
      newArr[rad]["isHidden"] = false;
      setXoxar(newArr);
    }
  }

  const handleClick = (ind) => {
    setBtnDis(true)
    let newArr = [...xoxar]
    newArr[ind]["isHidden"] = false;
    setXoxar(newArr);
    var winner = checkWin()
    const chk = checkNine(winner)
    if (chk) {
      winner = {
        "win": false,
        "winner": "Both"
      }
    }
    if (winner) {
      gameOver(winner)
    }

    if (!chk && !winner) {
      xoxoMove()
      winner = checkWin()
      const chk = checkNine(winner)
      if (chk) {
        winner = {
          "win": false,
          "winner": "Both"
        }
      }
      if (winner) {
        gameOver(winner)
      }
    }

    if (!winner) {
      setBtnDis(false)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h1>XOX</h1>
        <div className="box">
          {xoxar.map((xox, index) => (
            <div key={index} className="grid-item"><button disabled={btnDis} onClick={() => handleClick(index)} className="btn" id={`btn${index}`}>{xox.isHidden === false ? (xox.value === "x" ? <img src={xo} alt="x"/> : <img src={ox} alt="o" />) : <img src="" alt="" />}</button></div>)
          )}
        </div>
        <button className="btn1" onClick={() => window.location.reload(false)}>Restart Game!</button>
      </header>
    </div>
  );
}

export default App;
