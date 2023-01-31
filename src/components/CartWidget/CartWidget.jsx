import React from 'react';

export const CartWidget = ({ cantidadCarrito }) => {
    return (
        <>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                <span className="jam jam-shopping-cart" />
            </button>
            <span>{cantidadCarrito}</span>
        </>
    );
}
