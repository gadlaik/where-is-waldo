import { useEffect } from "react";

function MatrixGrid() {
  useEffect(() => {
    for (let i = 0; i < 330; i++) {
      let cube = document.createElement("div");
      cube.className = "fragment" + i;
      document.querySelector(".matrix").append(cube);
    }
  }, []);
  return <div className="matrix"></div>;
}

export default MatrixGrid;
