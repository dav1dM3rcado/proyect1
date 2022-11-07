import { BrowserRouter } from "react-router-dom";
import Foter from "./components/layout/Foter";
import Nab from "./components/layout/Nab";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import vono3 from "./components/img/vono3.jpg";
import novo1 from "./components/img/novo1.jpg";
import Card from "./components/pages/Cardts";
export default function App() {
  return (
    <>
      <Nab />
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={vono3} alt="First slide" />
            <Carousel.Caption>
              <h3>RECICLARG</h3>
              <p>BUSCA LOS PUNTOS PARA DEPOSITAR TU BASURA.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={novo1} alt="Second slide" />

            <Carousel.Caption>
              <h3>RECICLARG</h3>
              <p>BUSCA LOS PUNTOS PARA DEPOSITAR TU BASURA.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1kTE43ypfuDmIboMa7kY67uEs3p-WSyg&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
        <Card />
      </div>
      <Foter />
    </>
  );
}
