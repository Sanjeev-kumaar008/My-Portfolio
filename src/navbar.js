import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function navbar() {
  return (
    <nav class="navbar sticky-top d-none d-lg-block navbar-light transparent nav-pills nav-fill">
      <div class="container-fluid justify-content-center">
        <Row className=" navrow">
          <Col className="justify-content-center navcol">
            <button
              type="button"
              className="shadow m-3 btn btn-outline-primary"
            >
              Home
            </button>
            <button
              type="button"
              className="shadow m-3 btn btn-outline-secondary"
            >
              TechStack
            </button>
            <button
              type="button"
              className="shadow m-3 btn btn-outline-success"
            >
              Projects
            </button>
            <button type="button" className="shadow m-3 btn btn-outline-danger">
              Experience
            </button>
            <button
              type="button"
              className="shadow m-3 btn btn-outline-warning"
            >
              Contact Info
            </button>
          </Col>
        </Row>
      </div>
    </nav>
  );
}
