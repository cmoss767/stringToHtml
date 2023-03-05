import { useState } from "react"
import { FaBold, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa"

interface SelectionTypes {
  bold: boolean
  underline: boolean
  italic: boolean
  h1: boolean
  h2: boolean
  h3: boolean
}
const ActionBar = () => {
  const [selected, setSelected] = useState<SelectionTypes>({
    bold: false,
    underline: false,
    italic: false,
    h1: false,
    h2: false,
    h3: false,
  })
  console.log(selected)
  return (
    <div className="actionContainer">
      <div className="buttonContainer">
        <button
          className={selected.bold ? "selectedButton" : ""}
          key="bold"
          onMouseDown={(evt) => {
            setSelected({ ...selected, bold: !selected.bold })
            evt.preventDefault()
            document.execCommand("bold", false)
          }}
        >
          <FaBold />
        </button>
        <div className="divider" />
        <button
          className={selected.italic ? "selectedButton" : ""}
          key="italic"
          onMouseDown={(evt) => {
            setSelected({ ...selected, italic: !selected.italic })
            evt.preventDefault()
            document.execCommand("italic", false)
          }}
        >
          <FaItalic />
        </button>
        <div className="divider" />
        <button
          className={selected.underline ? "selectedButton" : ""}
          key="underline"
          onMouseDown={(evt) => {
            setSelected({ ...selected, underline: !selected.underline })
            evt.preventDefault()
            document.execCommand("underline", false)
          }}
        >
          <FaUnderline />
        </button>
        <div className="divider" />
        <button
          className={selected.h1 ? "selectedButton" : ""}
          key="h1"
          onMouseDown={(evt) => {
            setSelected({ ...selected, h1: !selected.h1, h2: false, h3: false })
            evt.preventDefault()
            document.execCommand("formatBlock", false, "h1")
          }}
        >
          H1
        </button>
        <div className="divider" />
        <button
          className={selected.h2 ? "selectedButton" : ""}
          key="h2"
          onMouseDown={(evt) => {
            setSelected({ ...selected, h2: !selected.h2, h1: false, h3: false })
            evt.preventDefault()
            document.execCommand("formatBlock", false, "h2")
          }}
        >
          H2
        </button>
        <div className="divider" />
        <button
          className={selected.h3 ? "selectedButton" : ""}
          key="h3"
          onMouseDown={(evt) => {
            setSelected({ ...selected, h3: !selected.h3, h1: false, h2: false })
            evt.preventDefault()
            document.execCommand("formatBlock", false, "h3")
          }}
        >
          H3
        </button>
      </div>
    </div>
  )
}
export default ActionBar
