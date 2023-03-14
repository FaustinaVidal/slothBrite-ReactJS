import React from 'react';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemCart = ({ item }) => {
    const {darkMode} = useDarkModeContext()
    return (
        <div className='card mb-3 cardCart'>
            <div className='col-md-4'>
                <img src={`./img/${item.img}`} alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className='col-md-8'>
                <div className="cardBody">
                    <h3 className='cardTitulo'>
                        {item.nombre} {item.modelo}
                    </h3>
                    <p className='cardTexto'>Cantidad: {item.cantidad}</p>
                    <p className='cardTexto'>Precio unitario: {item.precio}</p>
                    <p className='cardTexto'>Subtotal: {item.cantidad * item.precio}</p>
                    <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}/*onClick*/>Eliminar producto</button >
                </div >
            </div >
        </div >
    );
}

