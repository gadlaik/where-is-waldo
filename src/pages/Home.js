import { Link } from "react-router-dom";
import WaldoHi from "../assets/WaldoHi.png";
import whereWaldo from "../assets/whereWaldoSM.jpg";
import whereWaldo2 from "../assets/whereWaldo2SM.jpg";
import whereWaldo3 from "../assets/whereWaldo3SM.jpg";
import "../styles/Home.css";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { useEffect, useState } from "react";

function Home() {
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

  console.log(leaderboard);

  return (
    <div className="container">
      <header className="home-header">
        <h1>Where's Waldo?</h1>
        <img src={WaldoHi} alt="Waldo Wave" />
      </header>

      <main className="levels">
        <div className="level">
          <Link to="level1">
            <img src={whereWaldo} alt="level 2 preview" />
          </Link>
          <div>
            <h2>Level 1</h2>
          </div>
        </div>
        <div className="level">
          <Link to="level2">
            <img src={whereWaldo2} alt="level 2 preview" />
          </Link>
          <div>
            <h2>Level 2</h2>
          </div>
        </div>
        <div className="level">
          <Link to="level3">
            <img src={whereWaldo3} alt="level 3 preview" />
          </Link>
          <div>
            <h2>Level 3</h2>
          </div>
        </div>
      </main>

      <footer>
        <Link to="leaderboard">
          <div>View Leaderboard</div>
        </Link>
        Property of Gadlajk
      </footer>
    </div>
  );
}

export default Home;
