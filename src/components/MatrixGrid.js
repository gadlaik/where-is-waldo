import { useEffect } from "react";

function MatrixGrid(e) {
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

      console.log(e);
      document.querySelector(".dropdown").style.top = `${e.clientY - 120}px`;
      document.querySelector(".dropdown").style.left = `${e.clientX - 40}px`;
      document.querySelector(".dropdown").style.display = "block";
    }
  }

  return (
    <div className="matrix" onClick={foundWaldo}>
      <div
        className="dropdown"
        style={{
          position: "absolute",
          height: 30,
          width: 100,
          backgroundColor: "yellow",
          display: "none",
        }}
      >
        <p>Waldo</p>
      </div>
    </div>
  );
}

export default MatrixGrid;
