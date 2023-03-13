import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Toastify
import { ToastContainer } from 'react-toastify';

//components
import { Navbar } from './Navbar/Navbar';
import { Contacto } from './Contacto/Contacto';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { TerminosYCondiciones } from './TerminosYCondiciones/TerminosYCondiciones';
import { Cart } from './Cart/Cart';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/terminos_y_condiciones' element={<TerminosYCondiciones/>} />
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}