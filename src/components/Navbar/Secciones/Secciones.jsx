import React from 'react';
import { Link } from 'react-router-dom'

//Context
import { useDarkModeContext } from '../../../context/DarkModeContext';

export const Secciones = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <li className="nav-item">
                <Link className='nav-link' to={'/'} >
                    <button type="button" className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>
                        Inicio
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to={'/Contacto'}>
                    <button type="button" className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>
                        Contacto
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to={'/Terminos_y_condiciones'}>
                    <button type="button" className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>
                        Términos y condiciones
                    </button>
                </Link>
            </li>
        </>
    );
}
