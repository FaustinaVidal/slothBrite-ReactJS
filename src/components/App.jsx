import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}