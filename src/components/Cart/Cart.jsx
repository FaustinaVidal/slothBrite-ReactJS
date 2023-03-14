import React from 'react';
import { Link } from "react-router-dom"
import { ItemList } from '../ItemList/ItemList';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const Cart = () => {
    const { darkMode } = useDarkModeContext()
    const carrito = [5, 6, 8]
    return (
        <>
            {
                carrito.length > 0 ?
                    <div className='container cartContainer'>
                        <ItemList prods={carrito} plantilla="ItemCart" />
                        <div className="divButtons">
                            <p>Resumen de la compra: "Precio total"</p>
                            <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `} /*onClick={() => }*/ >Limpiar</button>
                            <Link className='nav-link' to={"/"}> <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>Seguir comprando</button> </Link>
                            <Link className='nav-link' to={"/Checkout"}> <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>Finalizar compra</button> </Link>
                        </div>
                    </div>
                    :
                    <>
                        <h2>Aún no has agregado productos a tu carrito.</h2>
                        <Link className="nav-link" to={"/"}>
                            <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>Seguir comprando</button>
                        </Link>
                    </>
            }
        </>
    );
}
