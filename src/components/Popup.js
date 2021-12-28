import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../styles/Popup.css";
import { gameover } from "./MatrixGrid";

function Popup() {
  let [time, setTime] = useState(0);

  useEffect(
    () =>
      setInterval(() => {
        !gameover && setTime(time++);
      }, 1000),
    []
  );

  return (
    <div className="popup">
      <div className="popup-form">
        <p>Your time: {time} seconds</p>
        <hr />
        <input
          type="text"
          id="username"
          placeholder="Username"
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Popup;
