import React from 'react';
import {useState, useEffect} from 'react';
import { consultarBDD } from '../../utils/funciones.js';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect( () => {
        consultarBDD('./json/productos.json').then(prods => console.table(prods))
    }, [])

    return (
        <div>
            
        </div>
    );
}


