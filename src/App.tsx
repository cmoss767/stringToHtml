import { useState, useEffect } from "react"
import "./App.css"
import ActionBar from "./components/ActionBar"

function App() {
  const [html, setHtml] = useState<any>()

  const handleInput = (outerHTML: any) => {
    let string = outerHTML
      .replace(/(<div)/gim, "<p")
      .replace(/<\/div>/gim, "</p>")

    let c = $.parseHTML(string)
    console.log(c)
    $(c).removeClass("textContainer")
    $(c).removeAttr("contenteditable class")
    $("p")
      .filter(() => {
        return $(c).text().trim().length == 0
      })
      .remove()

    const result: string[] = []
    for (let i = 0; i < c.length; i++) {
      if (c.length > 1 && i == c.length - 1) break
      const element = c[i] as HTMLElement
      const string = element.outerHTML
      result.push(string)
    }

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
                console.log(e.currentTarget.outerHTML)
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
