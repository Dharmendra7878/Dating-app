<<<<<<< HEAD
"use client";
import { useState } from "react";
import myImage from './assets/iiii.jpg'; 
import myImageB from './assets/dance-dancing.gif'; 

export default function Page() {
=======
import { useState } from "react";
import "./App.css";
import myImage from "./assets/iiii.jpg";
import myImageB from "./assets/dance-dancing.gif";

export default function App() {
>>>>>>> 4692a93b471bcaecb4da4021c9aba419dc16d765
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
<<<<<<< HEAD
    <div className="h-screen w-full bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 flex flex-col items-center justify-center text-center p-4 font-sans overflow-hidden">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="w-32 h-32 animate-bounce"
          />
          <h1 className="my-4 text-4xl font-bold text-rose-700 animate-pulse">WOOOOOO!!! I love you pookie!! ;))</h1>
          <p className="my-2 text-3xl text-rose-600 font-semibold">The Prettiest Girl of The Universe</p>
          <p className="my-1 text-2xl text-rose-500">MY Foody & Lazy Girl 💘</p>
          <p className="my-1 text-2xl text-rose-500">You are The Most Beautiful Cuttie In the World 😘</p>

          <div className="flex flex-row items-center justify-center gap-6 mt-6">
            <img src={myImageB} alt="left gif" className="w-24 h-24 rounded-xl shadow-xl" />
            <img
              src={myImage}
              alt="girl"
              className="w-[200px] h-auto rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-pink-400"
            />
            <img src={myImageB} alt="right gif" className="w-24 h-24 rounded-xl shadow-xl" />
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px] mb-4 drop-shadow-lg animate-heartbeat"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="bear with roses"
          />
          <h1 className="my-4 text-4xl font-bold text-rose-600 animate-pulse">Will you be my Valentine? 💖</h1>
          <div className="flex items-center gap-6">
            <button
              className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2 text-white font-bold shadow-md hover:shadow-rose-400 hover:scale-110 transition-all duration-300"
              style={{ fontSize: yesButtonSize }}
=======
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
>>>>>>> 4692a93b471bcaecb4da4021c9aba419dc16d765
              onClick={() => setYesPressed(true)}
            >
              Yes 💘
            </button>
<<<<<<< HEAD
            <button
              onClick={handleNoClick}
              className="rounded-full bg-rose-400 px-6 py-2 text-white font-bold shadow-md hover:shadow-rose-600 hover:scale-105 transition-all duration-300"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
=======
            <button className="no-button" onClick={handleNoClick}>
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
>>>>>>> 4692a93b471bcaecb4da4021c9aba419dc16d765
      )}
    </div>
  );
}
