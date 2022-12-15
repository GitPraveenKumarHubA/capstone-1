import React from "react";

function ColorCard({ color, colorCode }) {
  let textColor = "text-white",
    codeColor = "text-white-50";

  if (color === "Light") {
    textColor = "text-secondary";
    codeColor = "text-secondary";
  }
  return (
    <div className="col-lg-6 mb-4">
      <div
        className={`card ${textColor} shadow`}
        style={{ backgroundColor: `${colorCode}` }}
      >
        <div className={`card-body`}>
          <div>{color}</div>
          <div className={`${codeColor}`}>{colorCode}</div>
        </div>
      </div>
    </div>
  );
}

export default ColorCard;
