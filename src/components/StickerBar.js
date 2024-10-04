import React from "react";

const StickerBar = ({ stickers, onSelectSticker }) => {
  return (
    <div className="sticker-bar">
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          className="sticker-item"
          onClick={() => onSelectSticker(sticker)}
        >
          <img src={sticker.src} alt={`Sticker ${sticker.id}`} />
        </div>
      ))}
      <style jsx>{`
        .sticker-bar {
          display: flex;
          overflow-x: auto;
          background-color: #f0f0f0;
          border-radius: 8px;
          margin-top: 15px;
        }
        .sticker-item {
          flex: 0 0 auto;
          width: 150px;
          height: 150px;
          margin-right: 10px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .sticker-item:hover {
          transform: scale(1.1);
        }
        .sticker-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default StickerBar;
