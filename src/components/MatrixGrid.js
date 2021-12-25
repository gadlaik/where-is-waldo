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

    let time = 0;

    // setInterval(() => {
    //   time++;
    //   if (!document.querySelector(".matrix")) time = 0;
    //   console.log(time);
    // }, 1000);
  }, []);

  function foundWaldo(e) {
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
        document.querySelector(".waldo").style.opacity = 0.3;
      else if (
        e.target.className === props.fragments.fragment4 ||
        e.target.className === props.fragments.fragment5 ||
        e.target.className === props.fragments.fragment6
      )
        document.querySelector(".wizzard").style.opacity = 0.3;
      else if (e.target.className === props.fragments.fragment7)
        document.querySelector(".odlaw").style.opacity = 0.3;

      if (e.target.parentElement.className === "matrix") {
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
  }

  return <div className="matrix" onClick={foundWaldo}></div>;
}

export default MatrixGrid;
