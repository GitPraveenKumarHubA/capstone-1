import React from "react";
import { Card } from "react-bootstrap";

function Illustrations() {
  return (
    <Card className="mb-4">
      <Card.Header className="text-primary fw-bold">Illustrations</Card.Header>
      <Card.Body>
        <div className="text-center">
          <img
            className="image-fluid px-3 px-sm-4 mt-3 mb-4"
            src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
            alt="illustrations.svg"
            style={{ width: "25rem" }}
          />
        </div>
        <p>
          Add some quality, svg illustrations to your project courtesy of
          unDraw, a constantly updated collection of beautiful svg images that
          you can use completely free and without attribution!
        </p>
        <a
          target="_blank"
          rel="nofollow"
          href="https://undraw.co/"
          style={{ textDecoration: "none", backgroundColor: "transparent" }}
        >
          Browse illustrations on &#8594;
        </a>
      </Card.Body>
    </Card>
  );
}

export default Illustrations;
