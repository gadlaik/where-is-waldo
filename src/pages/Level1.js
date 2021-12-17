// import Popup from "../components/Popup";
import whereWaldo from "../assets/whereWaldo.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";
import MatrixGrid from "../components/MatrixGrid";

function Level1() {
  function foundWaldo(e) {
    if (
      e.target.className === "fragment64" ||
      e.target.className === "fragment65"
    )
      document.querySelector(".waldo").style.opacity = 0.3;
    else console.log(false);
  }

  return (
    <div className="level-container" onClick={foundWaldo}>
      <div className="home-header level-header">
        <h1>Where's</h1>
        <img src={waldo} alt="Waldo Wave" className="waldo" />
      </div>

      <MatrixGrid />
      <img src={whereWaldo} alt="whereWaldo" className="level-img" />
    </div>
  );
}

export default Level1;
