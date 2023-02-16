import React from 'react';
import { Link } from 'react-router-dom'

export const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className='nav-link' to={'/'} >
                    <button type="button" className="btn btn-primary">
                        Inicio
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to={'/Nosotros'}>
                    <button type="button" className="btn btn-primary">
                        Nosotros
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to={'/Contacto'}>
                    <button type="button" className="btn btn-primary">
                        Contacto
                    </button>
                </Link>
            </li>
        </>
    );
}
