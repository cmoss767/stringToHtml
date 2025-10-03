import { useState } from "react"
import DOMPurify from "dompurify"
import "./App.css"
import ActionBar from "./components/ActionBar"

function App() {
  const [html, setHtml] = useState<string[] | undefined>()

  const handleInput = (outerHTML: string) => {
    // Normalize HTML structure
    let string = outerHTML
      .replace(/(<div)/gim, "<p")
      .replace(/<\/div>/gim, "</p>")
      .replace(/(<b>)/gim, "<strong>")
      .replace(/<\/b>/gim, "</strong>")
      .replace(/(<i)/gim, "<em")
      .replace(/<\/i>/gim, "</em>")

    // Sanitize the HTML
    const sanitized = DOMPurify.sanitize(string, {
      ALLOWED_TAGS: ['p', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'br'],
      ALLOWED_ATTR: []
    })

    // Parse with native DOM APIs
    const parser = new DOMParser()
    const doc = parser.parseFromString(sanitized, 'text/html')
    const elements = Array.from(doc.body.children)

    // Remove unwanted attributes and classes
    elements.forEach(el => {
      el.removeAttribute('contenteditable')
      el.removeAttribute('class')
      if (el.classList.contains('textContainer')) {
        el.classList.remove('textContainer')
      }
    })

    const result: string[] = []
    for (let i = 0; i < elements.length; i++) {
      if (elements.length > 1 && i === elements.length - 1) break
      
      const element = elements[i] as HTMLElement
      const elementHTML = element.outerHTML
      const hasP = /<p>/.test(elementHTML)
      const hasClosingP = /<\/p>/.test(elementHTML)
      const hasBr = /<br>/.test(elementHTML)
      
      let res = ""
      if (hasP && hasClosingP && hasBr) {
        res = "<br>"
      } else {
        res = elementHTML.replace(/(<p><\/p>)/gim, "")
      }

      result.push(res)
    }

    setHtml(result)
  }
  const handleDownload = () => {
    if (html && html.length > 0 && !(html.length === 1 && html[0] === "")) {
      const htmlContent = html.join('\n')
      const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported HTML</title>
</head>
<body>
${htmlContent}
</body>
</html>`
      
      const blob = new Blob([fullHTML], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.download = `export-${new Date().toISOString().split('T')[0]}.html`
      link.href = url
      link.click()
      URL.revokeObjectURL(url)
    }
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
                handleInput(e.currentTarget.outerHTML)
              }}
            ></div>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
        <div className="card seperate">
          <div className="centerText overFlow">
            <h1>HTML Code</h1>
            {html?.map((el: string, index: number) => {
              return <div key={index}>{el}</div>
            })}
          </div>

          <div className="centerText downloadButton">
            <button
              disabled={html == null || (html.length === 1 && html[0] === "")}
              onClick={handleDownload}
            >
              Download HTML
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
