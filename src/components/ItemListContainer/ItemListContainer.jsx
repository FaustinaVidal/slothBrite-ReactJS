import React from 'react';
import {useState, useEffect} from 'react';
import { consultarBDD } from '../../utils/funciones.js';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList.jsx';

export const ItemListContainer = () => {
    const { categoria } = useParams()
    const [productos, setProductos] = useState([])

    useEffect( () => {
        if (categoria) {
            consultarBDD('../json/productos.json').then(products => {
                const prods = products.filter(prod => prod.categoria === categoria)
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            })
        } else {
            consultarBDD('../json/productos.json').then(prods => {
                console.log(prods)
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            })
        }
    }, [categoria])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}


