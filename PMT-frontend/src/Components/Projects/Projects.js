import React from "react";
import ProgressBar from "./ProgressBar";

function Projects() {
  return (
    <div className="projects">
      <ProgressBar title="Server Migrations" percentage={30} color="danger" />
      <ProgressBar title="Sales Tracking" percentage={23} color="warning" />
      <ProgressBar title="Customer Database" percentage={45} color="primary" />
      <ProgressBar title="Payment Details" percentage={79} color="info" />
      <ProgressBar title="Account Configuration" percentage={100} color="success" />
    </div>
  );
}

export default Projects;
