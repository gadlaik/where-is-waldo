import Popup from "../components/Popup";
import "../styles/Level.css";
import whereWaldo from "../assets/whereWaldo.jpg";

function Level1() {
  return (
    <div className="level-container">
      <div className="level-header"></div>
      <img src={whereWaldo} alt="whereWaldo" />
    </div>
  );
}

export default Level1;
