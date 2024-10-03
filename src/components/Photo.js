import React, { forwardRef } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const PhotoImage = styled.img`
  width: 200px;
  height: auto;
  position: absolute;
`;

const Photo = forwardRef(({ photo, updatePhotoPosition }, ref) => {
  const handleDragStop = (e, data) => {
    updatePhotoPosition(photo.id, data.x, data.y);
  };

  return (
    <Draggable
      nodeRef={ref}
      position={{ x: photo.x, y: photo.y }}
      onStop={handleDragStop}
    >
      <div ref={ref}>
        <PhotoImage src={photo.src} alt="Uploaded" />
      </div>
    </Draggable>
  );
});

export default Photo;
