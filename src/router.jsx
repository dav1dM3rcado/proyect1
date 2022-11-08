import { Route, Routes } from 'react-router-dom';
import React from 'react';
import InfoContenedores from './components/views/infoCont';
import PuntosDeReciclaje from './components/views/puntosReciclaje';
import PuntosDeVenta from './components/views/puntosVenta';
import SumateReciclarg from './components/views/Sumate';

function Router() {

    return (

        <Routes className="rutas">

            <Route path='/puntosdereciclaje' element={<PuntosDeReciclaje />} />
            <Route path='/infocontenedores' element={<InfoContenedores />} />
            <Route path='/puntosdereciclaje' element={<PuntosDeVenta />} />
            <Route path='/sumateReciclarg' element={<SumateReciclarg />} />

        </Routes>
    )

}

export default Router;