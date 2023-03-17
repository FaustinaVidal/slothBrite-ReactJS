import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount'

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext';

export const ItemCart = ({ item }) => {
    const { darkMode } = useDarkModeContext()
    const { removeItem, addItem } = useCarritoContext()
    const onAdd = (cantidad) => {
        addItem(item, cantidad)
    }

    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imgDelante} className="card-img img" alt={`imagen de ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className='cardTitulo'>{item.nombre} {item.modelo}</h3>
                        <p className="card-text">Cantidad: {item.cantidad}</p>
                        <p className="card-text">Precio unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <ItemCount valorInicial={1} stock={item.stock} onAdd={onAdd} textoBoton={"Añadir al carrito"}/>
                    <button className="btn btn-dark btns" onClick={() => removeItem(item.id)} >Eliminar producto</button >
                    </div>
                </div>
            </div>
        </div>
    );
}

