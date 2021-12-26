import "../styles/Popup.css";

function Popup() {
  return (
    <div className="popup">
      <div className="popup-form">
        <p>Your time: 69 seconds</p>
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
