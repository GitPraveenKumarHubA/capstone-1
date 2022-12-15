import React from "react";

function ProgressBar({ title, percentage, color }) {
  return (
    <>
      <h4 className="small fw-bold d-flex align-items-center justify-content-between ">
        {title}{" "}
        <span>{percentage !== 100 ? `${percentage}%` : "Complete!"}</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`"progress-bar" bg-${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
