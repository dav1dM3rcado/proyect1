import React from "react";
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.jpg';

function Header() {

    return (
        <header className="nav-header">
         
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img className="navbar-brand" src={logo} />
                    <span>RECICLARG</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/puntosdereciclaje">Puntos de Reciclaje</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/infocontenedores">Info Contenedores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/puntosdeventa">Puntos de Venta</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/conteo">Sumate a Reciclarg</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Outlet />
        </header>
    )

}

export default Header;