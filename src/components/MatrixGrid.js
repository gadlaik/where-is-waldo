import { useEffect } from "react";
let dropdown = document.createElement("div");
dropdown.classList.add("dropdown");

function MatrixGrid(props) {
  useEffect(() => {
    for (let i = 0; i < 330; i++) {
      let cube = document.createElement("div");
      cube.className = "fragment" + i;
      document.querySelector(".matrix").append(cube);
    }
  }, []);

  function foundWaldo(e) {
    if (
      e.target.className === "matrix" ||
      e.target.parentElement.className === "matrix"
    ) {
      if (
        e.target.className === "fragment64" ||
        e.target.className === "fragment65"
      )
        document.querySelector(".waldo").style.opacity = 0.3;
      else console.log(false);

      e.target.appendChild(dropdown);
      dropdown.style.display = "block";
      dropdown.innerHTML = `${
        props.toFind.includes("waldo") && "<div>Waldo</div>"
      }`;

      if (props.toFind.includes("wizzard"))
        dropdown.innerHTML += "<div>Wizzard</div>";

      if (props.toFind.includes("odlaw"))
        dropdown.innerHTML += "<div>Odlaw</div>";
    }
  }

  return <div className="matrix" onClick={foundWaldo}></div>;
}

export default MatrixGrid;
