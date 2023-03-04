import { useState, useEffect } from "react"
import "./App.css"
import ActionBar from "./components/ActionBar"

function App() {
  const [text, setText] = useState<string | null>()
  const [html, setHtml] = useState<string | null>()
  useEffect(() => {
    let string = ""
    if (text) {
      string = "<p>" + text + "</p>"
    }

    setHtml(string)
  }, [text])

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
            <div
              className="textContainer"
              contentEditable="true"
              onInput={(e) => setText(e.currentTarget.textContent)}
            ></div>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
        <div className="card">
          <div className="centerText">
            <h1>HTML Code</h1>
            <div>{html}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
