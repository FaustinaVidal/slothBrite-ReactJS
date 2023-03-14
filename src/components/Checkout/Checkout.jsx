import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const Checkout = () => {
    const { darkMode } = useDarkModeContext()
    let navigate = useNavigate()
    const datosFormCheckout = useRef()
    const consultarFormCheckout = (e) => {
        e.preventDefault()
        const dataCheckout = new FormData(datosFormCheckout.current)
        const clienteCheckout = Object.fromEntries(dataCheckout)
        e.target.reset()
        toast.success('¡Gracias por elegirnos!')
        navigate('/')
    }
    return (
        <div className='container contForm'>
            <form onSubmit={consultarFormCheckout} ref={datosFormCheckout}>
                <div className="mb-3">
                    <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                    <input type="text" className='form-control' name='nombre' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Correo electrónico</label>
                    <input type="email" className='form-control' name='email' required />
                </div>
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
                <button type='submit' className={`btn ${darkMode ? "btn-secondary" : "btn-primary"} `}>Finalizar compra</button>
            </form>
        </div>
    );
}

