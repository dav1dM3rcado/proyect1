import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.jpg"
export default function Nab() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <img src={logo}/>
          <br/>
          <Navbar.Brand href="#home">RECICLIARG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Puntos</Nav.Link>
             
              <Nav.Link href="#deets">Info Contenedores</Nav.Link>
              <Nav.Link href="#deets">Nosotros</Nav.Link>
              <Nav.Link href="#deets">PDF Informativo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
