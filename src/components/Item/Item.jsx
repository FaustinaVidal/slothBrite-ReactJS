import React from 'react';

export const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={`./img/${item.imgDelante}`} className="card-img-top" alt={`imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{`${item.nombre}`}</h5>
                <p className="card-text">${`${item.precio}`}</p>
                <a href="#" className="btn btn-primary">Ver producto</a>
            </div>
        </div>
    );
}

