import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Categorias } from './Categorias/Categorias';
import { Secciones } from './Secciones/Secciones';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className='nav-link' to={'/'} >
          <img src="/img/logoSlothBrite.PNG" width={100} height="auto" alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Secciones />
            <Categorias />
          </ul>
          <CartWidget cantidadCarrito={0} />
        </div>
      </div>
    </nav>
  );
}

