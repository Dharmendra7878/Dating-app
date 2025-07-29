import { useState } from "react";
import "./App.css";
import myImage from "./assets/iiii.jpg";
import myImageB from "./assets/dance-dancing.gif";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container">
      {yesPressed ? (
        <div className="yes-screen">
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="yes-gif"
          />
          <h1 className="yes-title">WOOOOOO!!! I love you pookie!! ;))</h1>
          <p className="yes-sub">The Prettiest Girl of The Universe</p>
          <p className="yes-sub">MY Foody & Lazy Girl 💘</p>
          <p className="yes-sub">You are The Most Beautiful Cuttie In the World 😘</p>

          <div className="image-row">
            <img src={myImageB} alt="left gif" className="side-gif" />
            <img src={myImage} alt="girl" className="main-img" />
            <img src={myImageB} alt="right gif" className="side-gif" />
          </div>
        </div>
      ) : (
        <div className="ask-screen">
          <img
            className="bear-roses"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="bear with roses"
          />
          <h1 className="ask-title">Will you be my Valentine? 💖</h1>
          <div className="button-row">
            <button
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes 💘
            </button>
            <button className="no-button" onClick={handleNoClick}>
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
