import React, { useRef } from "react";
import { useDrag } from "react-dnd";
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
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: "scrapbook-item",
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  const handleDrag = (e, d) => {
    onUpdate({ left: d.x, top: d.y });
  };

  const handleResize = (e, direction, ref, delta, position) => {
    onUpdate({
      width: parseInt(ref.style.width, 10),
      height: parseInt(ref.style.height, 10),
      ...position,
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
    <div ref={ref} style={{ position: "absolute", left, top }}>
      <Rnd
        size={{ width, height }}
        position={{ x: 0, y: 0 }}
        onDragStop={handleDrag}
        onResize={handleResize}
        bounds="parent"
        style={{
          opacity: isDragging ? 0.5 : 1,
          border: "1px solid #ddd",
          background: "#f0f0f0",
        }}
      >
        {renderContent()}
      </Rnd>
    </div>
  );
};

export default ScrapbookItem;
