import React from 'react'
import { useState } from 'react'

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemCount = ({ valorInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valorInicial) //Defino un estado con valor inicial 1

    const restar = () => contador > valorInicial && setContador(contador - 1)
    const sumar = () => contador < stock && setContador(contador + 1)

    const {darkMode} = useDarkModeContext()

    if (stock) {
        return (
            <div>
                <button type="button" className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `} onClick={() => restar()}>-</button>
                {contador}
                <button type="button" className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `} onClick={() => sumar()}>+</button>
                <button type="button" className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `} onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        );
    }
}
