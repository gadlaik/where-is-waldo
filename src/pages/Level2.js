import Popup from "../components/Popup";
import whereWaldo2 from "../assets/whereWaldo2.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";
import wizzard from "../assets/Wizzard.png";

function Level2() {
  return (
    <div className="level-container">
      <div className="home-header level-header">
        <h1>Where's</h1>
        <img src={waldo} alt="Waldo" />
        <img src={wizzard} alt="Wizzard" />
      </div>
      <img src={whereWaldo2} alt="whereWaldo2" className="level-img" />
    </div>
  );
}

export default Level2;
