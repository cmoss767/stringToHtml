import { useState } from "react"
import "./App.css"
import ActionBar from "./components/ActionBar"

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="centerText">
          <h1>Rich Text Editor</h1>
        </div>
        <ActionBar />
        <div className="textContainer" contentEditable="true"></div>
      </div>
    </div>
  )
}

export default App
