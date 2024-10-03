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
        <>
          <h1>Welcome, {user.name}!</h1>
          <PhotoUploader onUpload={handleUpload} />
          <ToolBar onAddText={handleAddText} onAddSticker={handleAddSticker} />
          <ScrapbookCanvas items={items} onUpdateItem={handleUpdateItem} />
        </>
      )}
    </div>
  );
};

export default App;
