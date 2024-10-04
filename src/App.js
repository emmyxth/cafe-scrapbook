import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import ScrapbookCanvas from "./components/ScrapbookCanvas";
import PhotoUploader from "./components/PhotoUploader";
import StickerBar from "./components/StickerBar";

const App = () => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [contentFadeIn, setContentFadeIn] = useState(false);

  // List of sticker assets
  const stickerAssets = [
    { id: 1, src: "/assets/sticker_1.png" },
    { id: 2, src: "/assets/sticker_2.png" },
    { id: 3, src: "/assets/sticker_3.png" },
    // Add more stickers as needed
  ];

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    if (user) {
      setTimeout(() => setContentFadeIn(true), 100);
    }
  }, [user]);

  const handleEnter = (name) => {
    setUser({ name });
    setContentFadeIn(false);
  };

  const handleUpload = (photos) => {
    const newItems = photos.map((photo) => ({
      id: Date.now() + Math.random(),
      type: "photo",
      content: photo.preview,
      left: Math.random() * 300,
      top: Math.random() * 300,
      width: 200,
      height: 200,
    }));
    setItems([...items, ...newItems]);
  };

  const handleAddText = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        type: "text",
        content: "New Text",
        left: Math.random() * 300,
        top: Math.random() * 300,
        width: 200,
        height: 100,
      },
    ]);
  };

  const handleAddSticker = (sticker) => {
    setItems([
      ...items,
      {
        id: Date.now(),
        type: "sticker",
        content: sticker.src,
        left: Math.random() * 300,
        top: Math.random() * 300,
        width: 100,
        height: 100,
      },
    ]);
  };

  const handleUpdateItem = (id, updates) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  return (
    <div className={`app ${fadeIn ? "fade-in" : ""}`}>
      {!user ? (
        <WelcomeScreen onEnter={handleEnter} />
      ) : (
        <div
          className={`scrapbook-container ${contentFadeIn ? "fade-in" : ""}`}
        >
          <h1 className="welcome-header">Welcome, {user.name}!</h1>
          <div className="scrapbook-content">
            <PhotoUploader onUpload={handleUpload} />
            <StickerBar
              stickers={stickerAssets}
              onSelectSticker={handleAddSticker}
            />
            <ScrapbookCanvas items={items} onUpdateItem={handleUpdateItem} />
          </div>
        </div>
      )}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&family=Epilogue&display=swap");

        .app {
          min-height: 100vh;
          background-color: #e6ded5;
          font-family: "Epilogue", sans-serif;
          opacity: 0;
          transition: opacity 1s ease-in;
        }
        .app.fade-in {
          opacity: 1;
        }
        .scrapbook-container {
          padding: 2rem;
          opacity: 0;
          transition: opacity 1s ease-in;
        }
        .scrapbook-container.fade-in {
          opacity: 1;
        }
        .welcome-header {
          font-family: "Averia Serif Libre", cursive;
          color: #c55a48;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 2rem;
        }
        .scrapbook-content {
          background-color: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default App;
