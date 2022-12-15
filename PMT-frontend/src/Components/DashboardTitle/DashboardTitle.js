import React from "react";
import "./DashboardTitle.css";
import { FaDownload } from "react-icons/fa";

function DashboardTitle() {
  return (
    <div className="title d-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Project Management Tool</h1>
      <a
        href="#"
        className="d-flex align-items-center justify-content-center btn btn-sm btn-primary shadow-sm"
      >
        <FaDownload
          className="text-white-50 me-1"
          style={{ fontSize: "0.875em" }}
        />
        Generate Report
      </a>
    </div>
  );
}

export default DashboardTitle;
