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
  const [border, setBorder] = React.useState(false);

  const handleClickAway = (e) => {
    if (!e.target.closest(".scrapbook-item")) {
      setBorder(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, []);

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
        background: "none",
        border: border ? "2px solid gray" : "none",
      }}
      // Add the following event handlers:
      onMouseDown={(e) => {
        e.stopPropagation();
        setBorder(true);
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        setBorder(true);
      }}
    >
      {renderContent()}
    </Rnd>
  );
};

export default ScrapbookItem;
