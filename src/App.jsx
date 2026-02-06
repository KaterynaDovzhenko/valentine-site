import { useState } from "react";
import "./App.css";

export default function App() {
  const [noVisible, setNoVisible] = useState(true);
  const [yesZoom, setYesZoom] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);

  const handleNo = () => {
    setNoVisible(false);
    setYesZoom(true); // zoom Yes button
  };

  const handleYes = () => {
    setYesClicked(true); // fade Yes button
    setNoVisible(false); // fade No button
  };

  return (
    <div className="container">
      <h1>
        {yesClicked
          ? "I didn’t have any doubt :3 😏💘"
          : "R u gonna be my Valentine? 💘"}
      </h1>

      <img
        className="gif"
        src={
          yesClicked
            ? "https://media.giphy.com/media/l4FGpPki5v2Bcd6Ss/giphy.gif"
            : "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
        }
        alt="cute gif"
      />

      <div className="buttons">
        <button
          className={`yes ${yesZoom ? "zoomed" : ""} ${yesClicked ? "hidden" : ""}`}
          onClick={handleYes}
        >
          Yes 💖
        </button>

        <button
          className={`no ${!noVisible ? "hidden" : ""}`}
          onClick={handleNo}
        >
          No 😢
        </button>
      </div>
    </div>
  );
}
