import React from 'react';
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../../context/CarritoContext';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const CartWidget = ({ cantidadCarrito }) => {
    const { darkMode } = useDarkModeContext()
    const { getItemQuantity } = useCarritoContext()

    return (
        <>
            <Link className='nav-link' to={'Cart'}>
                <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} my-2 my-sm-0`} type="submit">
                    <span className="jam jam-shopping-cart " />
                </button>
                {getItemQuantity() > 0 && <span className='colorWhite'>{getItemQuantity()}</span>}
            </Link>
            {/*<span className="colorWhite">{cantidadCarrito}</span>*/}
        </>
    );
}
