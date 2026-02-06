import { useState } from "react";
import "./App.css";

export default function App() {
  const [noVisible, setNoVisible] = useState(true);
  const [yesZoom, setYesZoom] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleNo = () => {
    setNoVisible(false); // hide No button
    setYesZoom(true); // trigger zoom on Yes button
  };

  const handleYes = () => {
    setAccepted(true); // show final text + gif
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1>R u gonna be my Valentine? 💘</h1>

          <img
            className="gif"
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
            alt="cute gif"
          />

          <div className="buttons">
            <button
              className={`yes ${yesZoom ? "zoomed" : ""}`}
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
            className="gif"
            src="https://media.giphy.com/media/l4FGpPki5v2Bcd6Ss/giphy.gif"
            alt="celebration gif"
          />
        </>
      )}
    </div>
  );
}
