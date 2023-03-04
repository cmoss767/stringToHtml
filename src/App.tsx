import { useState } from "react"
import "./App.css"
import ActionBar from "./components/ActionBar"

function App() {
  return (
    <div className="App">
      <div className="centerText">
        <h1>Text to HTML Converter</h1>
      </div>
      <div className="flexBox">
        <div className="card">
          <div className="centerText">
            <h1>Text Editor</h1>
          </div>
          <ActionBar />
          <div>
            <div className="textContainer" contentEditable="true"></div>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
        <div className="card">
          <div className="centerText">
            <h1>HTML Code</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
