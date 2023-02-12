import './App.css';
import React from 'react';

//components
import {Navbar} from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import {ItemCount} from './ItemCount/ItemCount';


export const App = () => {
  return (
    <>
    <Navbar logo={"logo"}/>
    <ItemListContainer/>
    <ItemCount valorInicial={1} stock={10} />
    </>
  );
}
