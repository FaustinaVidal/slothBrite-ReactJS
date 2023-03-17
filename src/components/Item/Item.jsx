import React from 'react';
import {Link} from 'react-router-dom'
import { useDarkModeContext } from '../../context/DarkModeContext'

export const Item = ({ item }) => {

    const {darkMode} = useDarkModeContext() 

    return (
        <div className="card mb-3 cardProducto">
            <img src={item.imgDelante} className="card-img-top img" alt={`imagen de ${item.nombre}`} />
            <div className=" cardBody">
                <h5 className="card-title">{`${item.nombre}`}</h5>
                <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <Link className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`} to={`/item/${item.id}`}>Ver Producto</Link>
            </div>
        </div>
    );
}

