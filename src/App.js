import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import ScrapbookCanvas from "./components/ScrapbookCanvas";
import PhotoUploader from "./components/PhotoUploader";
import ToolBar from "./components/Toolbar";

const App = () => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);

  const handleEnter = (name) => {
    setUser({ name });
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
    <div className="app">
      {!user ? (
        <WelcomeScreen onEnter={handleEnter} />
      ) : (
        <div className="scrapbook-container">
          <h1 className="welcome-header">Welcome, {user.name}!</h1>
          <div className="scrapbook-content">
            <PhotoUploader onUpload={handleUpload} />
            {/* <ToolBar
              onAddText={handleAddText}
              onAddSticker={handleAddSticker}
            /> */}
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
        }
        .scrapbook-container {
          padding: 2rem;
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
