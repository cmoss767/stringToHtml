import { useState } from "react"
import "./App.css"
import ActionBar from "./components/ActionBar"

function App() {
  return (
    <div className="App">
      <h1>Rich Text Editor</h1>
      <div className="card">
        <ActionBar />
        <div className="textContainer" contentEditable="true"></div>
      </div>
    </div>
  )
}

export default App
