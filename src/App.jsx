import { BrowserRouter } from "react-router-dom";
import Foter from "./components/layout/Foter";
import Header from './components/layout/Header';
import Router from "./router";
import Carrusel from "./components/fragments/Carrusel";
import Mapas from './components/fragments/Mapas';

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./components/pages/Cardts";

export default function App() {

  return (
    <BrowserRouter>

      <Header />

      <main>
        <Router />
      </main>

      <div>
        <Carrusel />
      </div>

      <div>
        <Mapas />
      </div>

      <div>
        <Card />
      </div>

      <footer>
        <Foter />
      </footer>

    </BrowserRouter>
  );
}
