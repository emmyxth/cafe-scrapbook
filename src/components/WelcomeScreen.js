import React, { useState } from "react";

const WelcomeScreen = ({ onEnter }) => {
  const [name, setName] = useState("");

  const handleEnter = () => {
    if (name.trim()) {
      onEnter(name);
    }
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to Cafe Scrapbook</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="welcome-input"
        />
        <button onClick={handleEnter} className="welcome-button">
          Enter
        </button>
      </div>
      <style jsx>{`
        .welcome-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(to right, #fff8e1, #ffecb3);
          font-family: Arial, sans-serif;
        }
        .welcome-container {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .welcome-title {
          color: #5d4037;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }
        .welcome-input {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .welcome-button {
          background-color: #795548;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .welcome-button:hover {
          background-color: #5d4037;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
