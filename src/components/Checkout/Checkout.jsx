import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { createOrdenCompra, updateProducto, getProducto } from '../../utils/firebase'

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext'

export const Checkout = () => {
    const { darkMode } = useDarkModeContext()
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    const [emails, setEmails] = useState({ email1: "", email2: "" })


    let navigate = useNavigate()
    const datosFormCheckout = useRef()
    const consultarFormCheckout = (e) => {
        e.preventDefault()
        const dataCheckout = new FormData(datosFormCheckout.current)
        const clienteCheckout = Object.fromEntries(dataCheckout)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodBDD.id, prodBDD)
            })
        })
        createOrdenCompra(clienteCheckout, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`¡Gracias por elegirnos, su compra por $${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito! El nro de orden de su compra es ${ordenCompra.id}.`)
        })
        e.target.reset()
        emptyCart()
        navigate('/')
    }
    return (
        <>
            {carrito.length === 0
                ?
                <>
                    <h2>Aún no has agregado productos a tu carrito.</h2>
                    <Link className="nav-link" to={"/"}>
                        <button className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`}>Seguir comprando</button>
                    </Link>
                </>
                :
                <div className='container contForm'>
                    <form onSubmit={consultarFormCheckout} ref={datosFormCheckout}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                            <input type="text" className='form-control' name='nombre' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email1" className='form-label'>Correo electrónico</label>
                            <input type="email" className='form-control' name='email1' required onChange={(e) => { setEmails({ ...emails, email1: e.target.value }) }} onBlur={(e) => { console.log(emails.email1) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email2" className='form-label'>Repite tu Correo electrónico</label>
                            <input type="email" className='form-control' name='email2' required onChange={(e) => { setEmails({ ...emails, email2: e.target.value }) }} onBlur={(e) => { console.log(emails.email2) }} />
                        </div>
                        {(emails.email1 === emails.email2) ? <></> : <><p className='alert'><strong>Oh no! </strong>Los correos electrónicos no coinciden, intenta nuevamente.</p></>}
                        <div className="mb-3">
                            <label htmlFor="ci" className='form-label'>Cédula de Identidad</label>
                            <input type="number" className='form-control' name='ci' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className='form-label'>Celular</label>
                            <input type="number" className='form-control' name='celular' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="domicilio" className='form-label'>Domicilio</label>
                            <input type="text" className='form-control' name='domicilio' required />
                        </div>
                        {(emails.email1 === emails.email2) ? <><button type='submit' className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`}>Finalizar compra</button></> : <><button disabled type='submit' className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} btns`}>Finalizar compra</button></>}
                    </form>
                </div>
            }
        </>

    );
}

