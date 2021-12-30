import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../styles/Popup.css";
import { gameover } from "./MatrixGrid";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import db from "../firebase";
import { Link } from "react-router-dom";

function Popup() {
  let [time, setTime] = useState(0);

  useEffect(
    () =>
      setInterval(() => {
        !gameover && setTime(time++);
      }, 1000),
    []
  );

  const submitTime = async () => {
    // const docRef = doc(db, "highscore", "leaderboard");
    const highscore = {
      name: document.getElementById("username").value,
      value: time,
    };
    // await setDoc(docRef, highscore);
    const collectionRef = collection(db, "highscore");
    addDoc(collectionRef, highscore);
  };

  return (
    <div className="popup">
      <div className="popup-form">
        <p>Your time: {time} seconds</p>
        <hr />
        <input
          type="text"
          id="username"
          placeholder="Username"
          autoComplete="off"
        />
        <Link to="/">
          <button type="submit" onClick={submitTime}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Popup;
