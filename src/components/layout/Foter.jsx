import { Col, Container, Row } from "react-bootstrap";
import oter from "../img/oter.png"

export default function Foter  () {
  return (
  
  <Container>
    <Row>
    <Col sm={12} md={4}>
      <img className="d-block w-100 " src={oter} alt="logo"/>
    </Col>
    <Col sm={12} md={4}>
      <h4 className="">RECICLIARG</h4>
    </Col>
    <Col sm={12} md={4}>
      <h5>Contacto</h5>
      <p>
        <i className= "me-2">
        </i>
          <span>+54 911 4444-4444</span>
      </p>
      <p>
        <i className="me-2"></i>
        <span>info@RECICLIARG.com</span>
      </p>
    </Col>
    </Row>
   </Container>
 )
}