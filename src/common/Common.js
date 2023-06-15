import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Common = () => {
  let navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">P-Siri</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home{" "}
          </Nav.Link>
          <div className="space"></div>
          <Nav.Link
            onClick={() => {
              navigate("/detail");
            }}
          >
            Features
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Common;
