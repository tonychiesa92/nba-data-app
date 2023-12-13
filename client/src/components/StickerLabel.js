// StickerLabel.js
import React from 'react';
import './StickerLabel.css'; // Import your CSS file for styling

const StickerLabel = ({ title, description }) => (
  <div className="sticker-label-container">
    <div className="sticker-label">
      <h3 className="sticker-title">{title}</h3>
      <p className="sticker-description">{description}</p>
    </div>
  </div>
);

export default StickerLabel;
