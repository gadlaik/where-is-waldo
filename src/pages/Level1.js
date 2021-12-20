// import Popup from "../components/Popup";
import whereWaldo from "../assets/whereWaldo.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";
import MatrixGrid from "../components/MatrixGrid";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../firebase";

function Level1() {
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
        <img src={waldo} alt="Waldo Wave" className="waldo" />
      </div>

      <MatrixGrid toFind={["waldo"]} />
      <img src={whereWaldo} alt="whereWaldo" className="level-img" />
    </div>
  );
}

export default Level1;
