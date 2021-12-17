// import Popup from "../components/Popup";
import whereWaldo3 from "../assets/whereWaldo3.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";
import odlaw from "../assets/Odlaw.png";
import wizzard from "../assets/Wizzard.png";

function Level3() {
  return (
    <div className="level-container">
      <div className="home-header level-header">
        <h1>Where's</h1>
        <img src={waldo} alt="Waldo" className="waldo" />
        <img src={odlaw} alt="Odlaw" className="odlaw" />
        <img src={wizzard} alt="Wizzard" className="wizzard" />
      </div>
      <img src={whereWaldo3} alt="whereWaldo3" className="level-img" />
    </div>
  );
}

export default Level3;
