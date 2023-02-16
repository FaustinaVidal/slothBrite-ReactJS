import React from 'react';
import {Link} from 'react-router-dom'

export const Item = ({ item }) => {
    return (
        <div className="card mb-3 cardProducto">
            <img src={`/img/${item.imgDelante}`} className="card-img-top img" alt={`imagen de ${item.nombre}`} />
            <div className="card-body cardBody">
                <h5 className="card-title">{`${item.nombre}`}</h5>
                <p className="card-text">${`${item.precio}`}</p>
                <Link className="btn btn-primary" to={`/item/${item.id}`}>Ver Producto</Link>
            </div>
        </div>
    );
}

