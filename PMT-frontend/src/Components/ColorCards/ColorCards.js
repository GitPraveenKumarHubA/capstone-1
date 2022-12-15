import React from "react";
import ColorCard from "./ColorCard";

function ColorCards() {
  return (
    <div className="row mt-4">
      <ColorCard color="Home"/>
      <ColorCard color="About"/>
      <ColorCard color="Info"/>
      <ColorCard color="Roadmap"/>
      <ColorCard color="Developer Options"/>
      <ColorCard color="Growth"/>
      <ColorCard color="Careers" />
      <ColorCard color="More"/>
    </div>
  );
}

export default ColorCards;
