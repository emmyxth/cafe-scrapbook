import React, { useState } from "react";

const WelcomeScreen = ({ onEnter }) => {
  const [name, setName] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleEnter = () => {
    if (name.trim()) {
      setIsFadingOut(true);
      setTimeout(() => {
        onEnter(name);
      }, 1000);
    }
  };

  return (
    <div className={`welcome-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="welcome-container">
        <div className="coffee-gif-container">
          <img
            src="/assets/coffee.gif"
            alt="Coffee GIF"
            className="coffee-gif"
          />
        </div>
        <h1 className="welcome-title">welcome</h1>
        <div className="input-container">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleEnter()}
            className="welcome-input"
          />
          <button onClick={handleEnter} className="enter-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="input-label">TYPE YOUR NAME</div>
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&family=Epilogue&display=swap");

        .welcome-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #e6ded5;
          font-family: "Epilogue", sans-serif;
          opacity: 1;
          transition: opacity 1s ease-out;
        }
        .welcome-screen.fade-out {
          opacity: 0;
        }
        .welcome-container {
          text-align: center;
        }
        .coffee-gif-container {
          margin-bottom: 20px;
        }
        .coffee-gif {
          max-width: 200px;
          height: auto;
        }
        .welcome-title {
          color: #c55a48;
          font-family: "Averia Serif Libre", cursive;
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        .input-container {
          position: relative;
          width: 300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }
        .welcome-input {
          flex-grow: 1;
          padding: 0.5rem;
          border: none;
          border-bottom: 2px solid black;
          font-size: 1rem;
          background: transparent;
          outline: none;
        }
        .enter-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-left: 10px;
          color: #c55a48;
          transition: color 0.3s ease;
        }
        .enter-button:hover {
          color: #9e4539;
        }
        .input-label {
          position: absolute;
          left: 0;
          bottom: -20px;
          font-size: 0.8rem;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
