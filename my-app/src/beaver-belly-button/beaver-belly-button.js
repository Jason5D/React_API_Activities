import React, { useState } from "react";
import "./beaver.css";
import YesButton from "../yes-button/yes-button";
const BeaverBellyButton = () => {
  const [beaver, setBeaver] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const handleClick = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity`);
    const data = await response.json();
    setBeaver(data);
    setClicked(true);
  };
  const handleYesButtonClick = () => {
    setBeaver(null);
    setClicked(false);
    setShowImage(true);
  };
  const specificImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ13wnUp1WAVoHOIGqoVJfLt6BD4sHtLxK5DDRjQxb6xzkDrw&s";
  return (
    <div className="beaver-viewer">
      {showImage ? (
        <div>
          <h1 id="goodluck">Good luck on your adventure!</h1>
          <img id="muscleman" src={specificImageUrl} alt="Specific" />
        </div>
      ) : (
        <div>
          {beaver ? (
            <div>
              <div id="apisuggestion">
                <h2>{beaver.activity}</h2>
                {clicked && (
                  <div data-testid="api-data">
                    <p>Type: {beaver.type}</p>
                    <p>People: {beaver.participants}</p>
                  </div>
                )}
              </div>
              {clicked && (
                <div>
                  <button id="nah" onClick={() => window.location.reload()}>
                    Nah try again...
                  </button>
                  <YesButton onClick={handleYesButtonClick} />
                </div>
              )}
            </div>
          ) : (
            <div>
              <div id="welcome">
                <h1 data-testid="mainheader">Are you bored AF?</h1>
                <p id="message">
                  Click on the beaver's belly to banish your boredom!
                </p>
              </div>
              <a>
                <img
                  data-testid="image"
                  id="beaver"
                  src="https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2022/06/shutterstock_2034751628-scaled-e1656610088889.jpg?fit=1600%2C1176&ssl=1"
                  alt="beaver"
                  onClick={handleClick}
                />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default BeaverBellyButton;