import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from "../ItemCount/ItemCount"
import { useCarritoContext } from '../../context/CarritoContext';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemDetail = ({ prod }) => {

    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(prod, cantidad)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
            <img src={prod.imgDelante} className="card-img-top img" alt={`imagen de ${prod.nombre}`} />
            </div>
            <div className="col-md-8">
                <div className="cardBody">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">Modelo: {prod.modelo}</p>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                    <p className="card-text">Stock: {prod.stock}</p>
                    <ItemCount valorInicial={1} stock={prod.stock} onAdd={onAdd} textoBoton={"Agregar al carrito"} />
                    <Link className='nav-link' to={'/cart'}><button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`}>Finalizar Compra</button></Link> 
                </div>
            </div>
        </div>
    );
}
