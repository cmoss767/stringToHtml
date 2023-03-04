import { useState, useEffect } from "react"
import "./App.css"
import ActionBar from "./components/ActionBar"

function App() {
  const [text, setText] = useState<any>()
  const [html, setHtml] = useState<any>()
  useEffect(() => {}, [text])
  const handleInput = (outerHTML: any) => {
    let string = outerHTML
      .replace(/(<div)/gim, "<p")
      .replace(/<\/div>/gim, "</p>")
    let c = $.parseHTML(string)
    $(c).removeClass("textContainer")
    $(c).removeAttr("contenteditable class")
    const result: string[] = []
    c.forEach((el: Node) => {
      const element = el as HTMLElement
      result.push(element.outerHTML)
    })

    console.log(c)
    setHtml(result)
  }

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
              onInput={(e) => {
                setText(e.currentTarget)

                handleInput(e.currentTarget.outerHTML)
              }}
            ></div>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
        <div className="card">
          <div className="centerText">
            <h1>HTML Code</h1>
            {html?.map((el: string) => {
              return <div>{el}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
