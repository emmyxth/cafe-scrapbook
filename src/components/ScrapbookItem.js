import React from "react";
import { Rnd } from "react-rnd";

const ScrapbookItem = ({
  id,
  left,
  top,
  width,
  height,
  type,
  content,
  onUpdate,
}) => {
  const handleDrag = (e, d) => {
    onUpdate({ left: d.x, top: d.y });
  };

  const handleResize = (e, direction, ref, delta, position) => {
    onUpdate({
      width: parseInt(ref.style.width, 10),
      height: parseInt(ref.style.height, 10),
      left: position.x,
      top: position.y,
    });
  };

  const renderContent = () => {
    switch (type) {
      case "photo":
        return (
          <img
            src={content}
            alt="Scrapbook item"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        );
      case "text":
        return (
          <p
            style={{ width: "100%", height: "100%", margin: 0, padding: "5px" }}
          >
            {content}
          </p>
        );
      case "sticker":
        return (
          <img
            src={content}
            alt="Sticker"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Rnd
      size={{ width, height }}
      position={{ x: left, y: top }}
      onDragStop={handleDrag}
      onResizeStop={handleResize}
      bounds="parent"
      style={{
        border: "1px solid #ddd",
        background: "#f0f0f0",
      }}
      // Add the following event handlers:
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      {renderContent()}
    </Rnd>
  );
};

export default ScrapbookItem;
