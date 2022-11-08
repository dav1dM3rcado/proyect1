import React from "react";
import Carousel from "react-bootstrap/Carousel";
import vono3 from ".././img/vono3.jpg";
import novo1 from '.././img/novo1.jpg';

function Carrusel() {

    return (
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

    )

}

export default Carrusel;