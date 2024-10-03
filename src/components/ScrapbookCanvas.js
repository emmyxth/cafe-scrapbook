import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ScrapbookItem from "./ScrapbookItem";

const ScrapbookCanvas = ({ items, onUpdateItem }) => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      <TransformComponent>
        <div className="scrapbook-canvas">
          {items.map((item) => (
            <ScrapbookItem
              key={item.id}
              {...item}
              onUpdate={(updates) => onUpdateItem(item.id, updates)}
            />
          ))}
        </div>
      </TransformComponent>

      <style jsx>{`
        .scrapbook-canvas {
          width: 1800px;
          height: 1200px;
          background-color: #f0f0f0;
          position: relative;
          border: 1px solid #ccc;
        }
      `}</style>
    </TransformWrapper>
  );
};

export default ScrapbookCanvas;
