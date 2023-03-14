import React from 'react';
import { Link } from 'react-router-dom'

//Context
import { useDarkModeContext } from '../../../context/DarkModeContext';

export const Categorias = React.memo(() => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>Tienda</button>
                </a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to={'/categoria/Gorros'}>Gorros</Link>
                    <Link className="dropdown-item" to={'/categoria/Remeras'}>Remeras</Link>
                    <Link className="dropdown-item" to={'/categoria/Canguros'}>Canguros</Link>
                    <Link className="dropdown-item" to={'/categoria/Camperas'}>Camperas</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to={'/'}>Ver todo</Link>
                </div>
            </li>
        </>
    );
})
