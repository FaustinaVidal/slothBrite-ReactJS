import React from 'react';
import { Link } from 'react-router-dom'

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const CartWidget = ({ cantidadCarrito }) => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <Link className='nav-link' to={'Cart'}><button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} my-2 my-sm-0`} type="submit">
                <span className="jam jam-shopping-cart" />
            </button></Link>
            <span className="colorWhite">{cantidadCarrito}</span>
            
        </>
    );
}
