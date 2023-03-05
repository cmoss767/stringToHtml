import { FaBold, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa"
const ActionBar = () => {
  $(document).ready(function () {
    $("#Bold").click(function () {
      document.execCommand("bold")
    })
    $("#Italic").click(function () {
      document.execCommand("italic")
    })
  })
  return (
    <div className="actionContainer">
      <div className="buttonContainer">
        <button
          key="bold"
          onMouseDown={(evt) => {
            evt.preventDefault()
            document.execCommand("bold", false)
          }}
        >
          <FaBold />
        </button>
        <div className="divider" />
        <button
          key="italic"
          onMouseDown={(evt) => {
            evt.preventDefault()
            document.execCommand("italic", false)
          }}
        >
          <FaItalic />
        </button>
        <div className="divider" />
        <button
          key="underline"
          onMouseDown={(evt) => {
            evt.preventDefault() // Avoids loosing focus from the editable area
            document.execCommand("underline", false) // Send the command to the browser
          }}
        >
          <FaUnderline />
        </button>
        <div className="divider" />
        <button
          key="formatBlock"
          onMouseDown={(evt) => {
            evt.preventDefault() // Avoids loosing focus from the editable area
            document.execCommand("formatBlock", false, "h1") // Send the command to the browser
          }}
        >
          H1
        </button>
        <div className="divider" />
        <button
          key="formatBlock"
          onMouseDown={(evt) => {
            evt.preventDefault() // Avoids loosing focus from the editable area
            document.execCommand("formatBlock", false, "h3") // Send the command to the browser
          }}
        >
          H3
        </button>
      </div>
    </div>
  )
}
export default ActionBar
