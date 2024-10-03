import React from "react";
import styled from "styled-components";

const ToolbarContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const ToolbarButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  background-color: #a0522d;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function Toolbar({ zoomIn, zoomOut, resetTransform }) {
  return (
    <ToolbarContainer>
      <ToolbarButton onClick={zoomIn}>Zoom In</ToolbarButton>
      <ToolbarButton onClick={zoomOut}>Zoom Out</ToolbarButton>
      <ToolbarButton onClick={resetTransform}>Reset</ToolbarButton>
    </ToolbarContainer>
  );
}

export default Toolbar;
