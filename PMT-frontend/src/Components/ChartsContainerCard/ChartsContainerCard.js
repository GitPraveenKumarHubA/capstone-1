import React from "react";
import { Card, Dropdown } from "react-bootstrap";

function ChartsContainerCard({ chart, header, dropDown }) {
  return (
    <Card className="shadow mb-4">
      <Card.Header className="py-3 d-flex align-items-center justify-content-between">
        <h6 className="m-0 text-primary fw-bold">{header}</h6>
        <Dropdown>
          {dropDown && <Dropdown.Toggle variant="light"></Dropdown.Toggle>}
          <Dropdown.Menu align="end">
            <Dropdown.Header className="text-muted">
              Dropdown Header
            </Dropdown.Header>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body>{chart}</Card.Body>
    </Card>
  );
}

export default ChartsContainerCard;
