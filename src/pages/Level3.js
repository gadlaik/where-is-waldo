import Popup from "../components/Popup";
import whereWaldo3 from "../assets/whereWaldo3.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";
import odlaw from "../assets/Odlaw.png";
import wizzard from "../assets/Wizzard.png";
import MatrixGrid from "../components/MatrixGrid";
import db from "../firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";

function Level3() {
  let [fragments, setFragments] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "whereWaldo"), (snapshot) =>
        setFragments(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

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
        <img src={odlaw} alt="Odlaw" className="odlaw" />
        <img src={wizzard} alt="Wizzard" className="wizzard" />
      </div>

      <MatrixGrid
        toFind={["waldo", "wizzard", "odlaw"]}
        fragments={fragments[2]}
      />
      <img src={whereWaldo3} alt="whereWaldo3" className="level-img" />
      <Popup />
    </div>
  );
}

export default Level3;
