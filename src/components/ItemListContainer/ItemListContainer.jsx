import React from 'react';
import {useState, useEffect} from 'react';
import { getProductos } from '../../utils/firebase';
import { useParams } from "react-router-dom"

import { ItemList } from '../ItemList/ItemList.jsx';

export const ItemListContainer = () => {
    const { categoria } = useParams()
    const [productos, setProductos] = useState([])

    useEffect( () => {
        if (categoria) {
            getProductos().then(products => {
                const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.categoria === categoria)
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            })
        } else {
            getProductos().then(products => {
                const prods = products.filter(prod => prod.stock > 0)
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


