import "./styles/App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import WaldoHi from "./assets/WaldoHi.png";
import whereWaldo from "./assets/whereWaldoSM.jpg";
import whereWaldo2 from "./assets/whereWaldo2SM.jpg";
import whereWaldo3 from "./assets/whereWaldo3SM.jpg";
import Level1 from "./pages/Level1";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="level1" element={<Level1 />} />
        </Routes>
        <header className="home-header">
          <h1>Where's Waldo?</h1>
          <img src={WaldoHi} alt="Waldo Wave" />
        </header>

        <main className="levels">
          <div className="level">
            <Link to="Level1">
              <img src={whereWaldo} alt="level 2 preview" />
            </Link>
            <div>
              <h2>Level 1</h2>
            </div>
          </div>
          <div className="level">
            <Link to="Level2">
              <img src={whereWaldo2} alt="level 2 preview" />
            </Link>
            <div>
              <h2>Level 2</h2>
            </div>
          </div>
          <div className="level">
            <Link to="Level3">
              <img src={whereWaldo3} alt="level 3 preview" />
            </Link>
            <div>
              <h2>Level 3</h2>
            </div>
          </div>
        </main>

        <footer>Property of Gadlajk</footer>
      </Router>
    </div>
  );
}

export default App;
