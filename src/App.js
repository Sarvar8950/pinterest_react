import './App.css';
import React from "react"
import Navbar from './containers/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Addpin from './containers/Addpin';
import Ideapin from './containers/Ideapin';
import Today from './containers/Today';

function App() {
  const [search, setsearch] = React.useState("trees")
  const [divdisplay, setdisplay] = React.useState("none")
  const [boardoptiondisplay, setboardoptiondisplay] = React.useState("none")
  const [ideapindisplay, setideapindisplay] = React.useState("none")

  function createpopup() {
    if (divdisplay === "none") {
      setdisplay("flex")
    } else {
      setdisplay("none")
    }
  }
  function createboardpopupoption() {
    if (boardoptiondisplay === "none") {
      setboardoptiondisplay("block")
    } else {
      setboardoptiondisplay("none")
    }
  }
  function ideapinpopup() {
    if (ideapindisplay === "none") {
      setideapindisplay("block")
    } else {
      setideapindisplay("none")
    }
  }
  
  function createpopuphide() {
    if (divdisplay === "flex") {
      setdisplay("none")
    }
    if (boardoptiondisplay === "block") {
      setboardoptiondisplay("none")
    }
  }

  return (
    <div onClick={createpopuphide}>
      <Navbar divdisplay={divdisplay} createpopup={createpopup} setsearch={setsearch} />
      <Routes>
        <Route path='/' element={<Home search={search} />}></Route>
        <Route path='/today' element={<Today />}></Route>
        <Route path='/addpin' element={<Addpin createboardpopupoption={createboardpopupoption} boardoptiondisplay={boardoptiondisplay} />}></Route>
        <Route path='/ideapin' element={<Ideapin ideapinpopup={ideapinpopup} ideapindisplay={ideapindisplay} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
