import React, { useState, useRef } from "react";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Photo from "./Photo";
import UploadButton from "./UploadButton";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Canvas() {
  const [photos, setPhotos] = useState([]);
  const refs = useRef({});

  const addPhotos = (newPhotos) => {
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const updatePhotoPosition = (id, x, y) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) => (photo.id === id ? { ...photo, x, y } : photo))
    );
  };

  return (
    <CanvasContainer>
      <TransformWrapper>
        <TransformComponent>
          {photos.map((photo) => {
            // Create a ref for each photo if it doesn't exist
            if (!refs.current[photo.id]) {
              refs.current[photo.id] = React.createRef();
            }

            return (
              <Photo
                key={photo.id}
                photo={photo}
                updatePhotoPosition={updatePhotoPosition}
                ref={refs.current[photo.id]}
              />
            );
          })}
        </TransformComponent>
      </TransformWrapper>
      <UploadButton addPhotos={addPhotos} />
    </CanvasContainer>
  );
}

export default Canvas;
