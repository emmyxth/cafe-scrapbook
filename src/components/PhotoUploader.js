import React, { useState, useRef } from "react";

const PhotoUploader = ({ onUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const uploadedFiles = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    onUpload(uploadedFiles);
  };

  return (
    <div
      className={`photo-uploader ${dragActive ? "drag-active" : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleChange}
        accept="image/*"
      />
      <p>Drag and drop your photos here or click to select files</p>
      <button onClick={() => inputRef.current.click()}>Select Files</button>

      <style jsx>{`
        .photo-uploader {
          border: 2px dashed #ccc;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .photo-uploader.drag-active {
          border-color: #795548;
          background-color: #f5e9e5;
        }
        .photo-uploader input[type="file"] {
          display: none;
        }
        .photo-uploader p {
          margin-bottom: 10px;
          color: #666;
        }
        .photo-uploader button {
          background-color: #795548;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .photo-uploader button:hover {
          background-color: #5d4037;
        }
      `}</style>
    </div>
  );
};

export default PhotoUploader;
