import "./styles/App.css";
import WaldoHi from "./assets/WaldoHi.png";
import whereWaldo from "./assets/whereWaldoSM.jpg";
import whereWaldo2 from "./assets/whereWaldo2SM.jpg";
import whereWaldo3 from "./assets/whereWaldo3SM.jpg";

function App() {
  return (
    <div className="container">
      <header className="home-header">
        <h1>Where's Waldo?</h1>
        <img src={WaldoHi} alt="Waldo Wave" />
      </header>

      <main className="levels">
        <div className="level">
          <img src={whereWaldo} alt="level 2 preview" />
          <div>
            <h3>Level 1</h3>
          </div>
        </div>
        <div className="level">
          <img src={whereWaldo2} alt="level 2 preview" />
          <div>
            <h3>Level 2</h3>
          </div>
        </div>
        <div className="level">
          <img src={whereWaldo3} alt="level 3 preview" />
          <div>
            <h3>Level 3</h3>
          </div>
        </div>
      </main>

      <footer>Property of Gadlajk</footer>
    </div>
  );
}

export default App;
