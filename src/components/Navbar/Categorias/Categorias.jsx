import React from 'react';
export const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tienda</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Gorros</a>
                    <a className="dropdown-item" href="#">Remeras</a>
                    <a className="dropdown-item" href="#">Canguros</a>
                    <a className="dropdown-item" href="#">Camperas</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Ver todo</a>
                </div>
            </li>
        </>
    );
}
