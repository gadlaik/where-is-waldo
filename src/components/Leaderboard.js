import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import "../styles/leaderboard.css";

function Leaderboard() {
  let [leaderboard, setLeaderboard] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "highscore"), (snapshot) => {
        setLeaderboard(
          snapshot.docs
            .map((doc) => doc.data())
            .sort((a, b) => a.value - b.value)
        );
      }),
    []
  );

  if (leaderboard) {
    document.querySelector(".leaderboard > ol").innerHTML = "";
    leaderboard.forEach((score, i) => {
      document.querySelector(".leaderboard > ol").innerHTML += `<li>${
        score.name
      } ${" "}<span>time: ${score.value}<span></li>`;
    });
  }

  return (
    <div className="leaderboard">
      <h1>TOP SCORES</h1>
      <ol></ol>
    </div>
  );
}

export default Leaderboard;
