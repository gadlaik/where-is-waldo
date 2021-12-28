import { useEffect } from "react";
let dropdown = document.createElement("div");
dropdown.classList.add("dropdown");
let gameover = false;

function MatrixGrid(props) {
  let isWaldoFound = props.toFind.includes("waldo") ? false : null;
  let isWizzardFound = props.toFind.includes("wizzard") ? false : null;
  let isOdlawFound = props.toFind.includes("odlaw") ? false : null;

  useEffect(() => {
    for (let i = 0; i < 330; i++) {
      let cube = document.createElement("div");
      cube.className = "fragment" + i;
      document.querySelector(".matrix").append(cube);
    }
  }, []);

  function foundWaldo(e) {
    // dropdown
    if (e.target.parentElement.className === "matrix") {
      e.target.appendChild(dropdown);
      dropdown.style.display = "block";

      if (props.toFind.includes("waldo"))
        dropdown.innerHTML = "<div>Waldo</div>";
      if (props.toFind.includes("wizzard"))
        dropdown.innerHTML += "<div>Wizzard</div>";
      if (props.toFind.includes("odlaw"))
        dropdown.innerHTML += "<div>Odlaw</div>";
    }

    if (
      e.target.parentElement.className === "matrix" ||
      e.target.parentElement.parentElement.className === "matrix" ||
      e.target.parentElement.parentElement.parentElement.className === "matrix"
    ) {
      if (
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment1 ||
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment2 ||
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment3
      )
        if (e.target.textContent === "Waldo") {
          isWaldoFound = true;
          document.querySelector(".waldo").style.opacity = 0.3;
        }
      if (
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment4 ||
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment5 ||
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment6
      )
        if (e.target.textContent === "Wizzard") {
          isWizzardFound = true;
          document.querySelector(".wizzard").style.opacity = 0.3;
        }
      if (
        e.target.parentElement.parentElement.className ===
        props.fragments.fragment7
      )
        if (e.target.textContent === "Odlaw") {
          isOdlawFound = true;
          document.querySelector(".odlaw").style.opacity = 0.3;
        }

      // game done check
      gameover = ![isWaldoFound, isWizzardFound, isOdlawFound].includes(false);
      if (gameover) document.querySelector(".popup").style.display = "flex";
      console.log(gameover);
    }
  }

  return <div className="matrix" onClick={foundWaldo}></div>;
}

export { gameover };
export default MatrixGrid;
