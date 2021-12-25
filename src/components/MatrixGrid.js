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

    // let time = 0;

    // setInterval(() => {
    //   time++;
    //   if (!document.querySelector(".matrix")) time = 0;
    //   console.log(time);
    // }, 1000);
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
        if (e.target.textContent === "Waldo")
          document.querySelector(".waldo").style.opacity = 0.3;
      if (
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment4 ||
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment5 ||
        e.target.parentElement.parentElement.className ===
          props.fragments.fragment6
      )
        if (e.target.textContent === "Wizzard")
          document.querySelector(".wizzard").style.opacity = 0.3;
      if (
        e.target.parentElement.parentElement.className ===
        props.fragments.fragment7
      )
        if (e.target.textContent === "Odlaw")
          document.querySelector(".odlaw").style.opacity = 0.3;
    }

    console.log(e.target.textContent);
  }

  return <div className="matrix" onClick={foundWaldo}></div>;
}

export default MatrixGrid;
