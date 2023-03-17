import React from 'react';
import { Link } from "react-router-dom"
import { ItemList } from '../ItemList/ItemList';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext';

export const Cart = () => {
    const { darkMode } = useDarkModeContext()
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    return (
        <>
            {
                carrito.length > 0 ?
                    <div className='container'>
                        <ItemList prods={carrito} plantilla="ItemCart" />
                        <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <div className="divButtons">
                            <button className="btn btn-dark btns" onClick={() => emptyCart()} >Limpiar carrito</button>
                            <Link className='nav-link' to={"/"}> <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`}>Seguir comprando</button> </Link>
                            <Link className='nav-link' to={"/Checkout"}> <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`}>Siguiente</button> </Link>
                        </div>
                    </div>
                    :
                    <div className='textMargin'>
                        <h2>Aún no has agregado productos a tu carrito.</h2>
                        <>
                            <Link className="nav-link" to={"/"}>
                                <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`}>Comprar</button>
                            </Link>
                        </>
                    </div>
            }
        </>
    );
}
