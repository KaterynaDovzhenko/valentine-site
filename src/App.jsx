import { useState } from "react";
import "./App.css";

export default function App() {
  const [noVisible, setNoVisible] = useState(true);
  const [yesScale, setYesScale] = useState(1);
  const [accepted, setAccepted] = useState(false);

  const handleNo = () => {
    setNoVisible(false);
    setYesScale(3); // big dramatic zoom
  };

  const handleYes = () => {
    setAccepted(true);
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1>Will you be my Valentine? 💕</h1>

          <img
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
            alt="cute gif"
            className="gif"
          />

          <div className="buttons">
            <button
              className={`yes ${yesScale > 1 ? "zoomed" : ""}`}
              onClick={handleYes}
            >
              Yes 💖
            </button>

            {noVisible && (
              <button className="no" onClick={handleNo}>
                No 😢
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <h1>I knew it 😏💘</h1>

          <img
            src="https://media.giphy.com/media/l4FGpPki5v2Bcd6Ss/giphy.gif"
            alt="celebration gif"
            className="gif"
          />

          <p className="final-text">I didn’t have any doubt :3</p>
        </>
      )}
    </div>
  );
}
