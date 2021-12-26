import Popup from "../components/Popup";
import whereWaldo from "../assets/whereWaldo.jpg";
import "../styles/Level.css";
import waldo from "../assets/Waldo.png";
import MatrixGrid from "../components/MatrixGrid";
import db from "../firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";

function Level1() {
  let [fragments, setFragments] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "whereWaldo"), (snapshot) => {
        setFragments(snapshot.docs.map((doc) => doc.data()));
      }),
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
        <img src={waldo} alt="Waldo Wave" className="waldo" />
      </div>

      <MatrixGrid toFind={["waldo"]} fragments={fragments[0]} />
      <img src={whereWaldo} alt="whereWaldo" className="level-img" />
      <Popup />
    </div>
  );
}

export default Level1;
