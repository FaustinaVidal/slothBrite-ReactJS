import './App.css';
import React from 'react';

//components
import {Navbar} from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer'


export const App = () => {
  return (
    <>
    <Navbar logo={"logo"}/>
    <ItemListContainer greeting={"Sloth Brite"}/>
    </>
  );
}
