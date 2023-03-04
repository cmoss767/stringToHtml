import { FaBold, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa"
const ActionBar = () => {
  return (
    <div className="actionContainer">
      <div className="buttonContainer">
        <button>
          <FaBold />
        </button>
        <div className="divider" />
        <button>
          <FaItalic />
        </button>
        <div className="divider" />
        <button>
          <FaUnderline />
        </button>
      </div>
    </div>
  )
}
export default ActionBar
