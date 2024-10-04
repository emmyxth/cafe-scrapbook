import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ScrapbookItem from "./ScrapbookItem";

const ScrapbookCanvas = ({ items, onUpdateItem }) => {
  const [panningDisabled, setPanningDisabled] = useState(false);

  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
      panning={{ disabled: panningDisabled }}
    >
      <TransformComponent>
        <div
          className="scrapbook-canvas"
          onMouseDown={(e) => {
            if (e.target.closest(".scrapbook-item")) {
              setPanningDisabled(true);
            }
          }}
          onMouseUp={() => setPanningDisabled(false)}
          onMouseLeave={() => setPanningDisabled(false)}
        >
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
          width: 1400px;
          height: 1200px;
          background-color: #ffffff;
          position: relative;
        }
      `}</style>
    </TransformWrapper>
  );
};

export default ScrapbookCanvas;
