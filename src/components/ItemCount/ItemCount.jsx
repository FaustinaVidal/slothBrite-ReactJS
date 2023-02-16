import React from 'react'
import {useState} from 'react'


export const ItemCount = ({valorInicial,stock}) => {

    const [contador, setContador] = useState(valorInicial) //Defino un estado con valor inicial 1

    const restar = () => contador > valorInicial && setContador(contador -1)
    const sumar = () => contador < stock && setContador(contador +1)

    if (stock) {
    return (
            <div>
                <button type="button" className="btn btn-secondary" onClick={() => restar()}>-</button>
                {contador}
                <button type="button" className="btn btn-secondary" onClick={() => sumar()}>+</button>
                <button type="button" className="btn btn-secondary">Agregar al Carrito</button>
            </div>

);
}
}
