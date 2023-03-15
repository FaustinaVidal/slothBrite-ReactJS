import React from 'react';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext';

export const ItemCart = ({ item }) => {
    const {darkMode} = useDarkModeContext()
    const {removeItem} = useCarritoContext()
    return (
        <div className='card mb-3 cardCart'>
            <div className='col-md-4'>
            <img src={item.imgDelante} className="card-img img" alt={`imagen de ${item.nombre}`} />
            </div>
            <div className='col-md-8'>
                <div className="cardBody">
                    <h3 className='cardTitulo'>
                        {item.nombre} {item.modelo}
                    </h3>
                    <p className='cardTexto'>Cantidad: {item.cantidad}</p>
                    <p className='cardTexto'>Precio unitario: {item.precio.toFixed(2)}</p>
                    <p className='cardTexto'>Subtotal: {item.cant * item.precio.toFixed(2)}</p>
                    <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `} onClick={() => removeItem(item.id)} >Eliminar producto</button >
                </div >
            </div >
        </div >
    );
}

