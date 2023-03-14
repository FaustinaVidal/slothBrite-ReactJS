import React from 'react';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const CartWidget = ({ cantidadCarrito }) => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} my-2 my-sm-0`} type="submit">
                <span className="jam jam-shopping-cart" />
            </button>
            <span className="colorWhite">{cantidadCarrito}</span>
            
        </>
    );
}
