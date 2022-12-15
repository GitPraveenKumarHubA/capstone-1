import React from "react";
import "./InfoCard.css";
import { Card, Col } from "react-bootstrap";

function InfoCard({ title, desc, icon, border_left }) {
  return (
    <Col xl={3} md={6} className="mb-4">
      <Card className={`${border_left} shadow`}>
        <Card.Body className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <span className="text-primary text-uppercase fs-6">{title}</span>
            <span className="h6 ">{desc}</span>
          </div>
          {icon}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default InfoCard;
