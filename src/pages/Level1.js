import Popup from "../components/Popup";
import whereWaldo from "../assets/whereWaldo.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";

function Level1() {
  return (
    <div className="level-container">
      <div className="home-header level-header">
        <h1>Where's</h1>
        <img src={waldo} alt="Waldo Wave" />
      </div>
      <img src={whereWaldo} alt="whereWaldo" className="level-img" />
    </div>
  );
}

export default Level1;
