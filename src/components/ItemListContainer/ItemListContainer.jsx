import React from 'react';
import {useState, useEffect} from 'react';
import { consultarBDD } from '../../utils/funciones.js';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList.jsx';

export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])

    useEffect( () => {
        if (idCategoria) {
            consultarBDD('../json/productos.json').then(products => {
                const prods = products.filter(prod => prod.idCategoria === idCategoria)
                const items = ItemList({prods})
                setProductos(items)
            })
        } else {
            consultarBDD('./json/productos.json').then(prods => {
                const items = ItemList({prods})
                setProductos(items)
            })
        }
    }, [idCategoria])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}


