import React from "react";

const ToolBar = ({ onAddText, onAddSticker }) => {
  const stickers = [
    // { id: 1, src: "/stickers/coffee.png", alt: "Coffee Sticker" },
    // { id: 2, src: "/stickers/cake.png", alt: "Cake Sticker" },
    // { id: 3, src: "/stickers/tea.png", alt: "Tea Sticker" },
  ];

  return (
    <div className="toolbar">
      <button onClick={onAddText} className="toolbar-button">
        Add Text
      </button>
      <div className="sticker-container">
        {stickers.map((sticker) => (
          <img
            key={sticker.id}
            src={sticker.src}
            alt={sticker.alt}
            onClick={() => onAddSticker(sticker)}
            className="sticker-button"
          />
        ))}
      </div>

      <style jsx>{`
        .toolbar {
          display: flex;
          align-items: center;
          background-color: #f5e9e5;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .toolbar-button {
          background-color: #795548;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-right: 10px;
        }
        .toolbar-button:hover {
          background-color: #5d4037;
        }
        .sticker-container {
          display: flex;
          align-items: center;
        }
        .sticker-button {
          width: 30px;
          height: 30px;
          object-fit: contain;
          margin-right: 10px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .sticker-button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default ToolBar;
