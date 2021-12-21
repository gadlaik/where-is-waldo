// import Popup from "../components/Popup";
import whereWaldo2 from "../assets/whereWaldo2.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";
import wizzard from "../assets/Wizzard.png";
import MatrixGrid from "../components/MatrixGrid";

function Level2() {
  return (
    <div
      className="level-container"
      onClick={(e) => {
        if (
          e.target.className !== "matrix" &&
          e.target.parentElement.className !== "matrix"
        )
          document
            .querySelectorAll(".dropdown")
            .forEach((dropdown) => (dropdown.style.display = "none"));
      }}
    >
      <div className="home-header level-header">
        <h1>Where's</h1>
        <img src={waldo} alt="Waldo" className="waldo" />
        <img src={wizzard} alt="Wizzard" className="wizzard" />
      </div>
      <MatrixGrid toFind={["waldo", "wizzard"]} />
      <img src={whereWaldo2} alt="whereWaldo2" className="level-img" />
    </div>
  );
}

export default Level2;
