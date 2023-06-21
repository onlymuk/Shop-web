import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Common = () => {
  let navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link
          onClick={() => {
            navigate("/");
          }}
        >
          <Navbar.Brand href="#home">P-Siri</Navbar.Brand>
        </Nav.Link>
        <Nav className="me-auto">
          <div className="space"></div>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Common;
