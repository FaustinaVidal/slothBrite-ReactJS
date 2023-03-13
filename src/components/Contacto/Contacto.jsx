import React from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

export const Contacto = () => {
    const datosFormContacto = useRef()
    const consultarFormContacto = (e) => {
        e.preventDefault()
        const dataContacto = new FormData(datosFormContacto.current)
        const clienteContacto = Object.fromEntries(dataContacto)
        e.target.reset()
        toast.success('Nos comunicaremos contigo a la brevedad')
    }
    return (
        <div className='container contForm'>
            <form onSubmit={consultarFormContacto} ref={datosFormContacto}>
                <h2>Contacto</h2>
                <div className="mb-3">
                    <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                    <input type="text" className='form-control' name='nombre' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Correo electrónico</label>
                    <input type="email" className='form-control' name='email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className='form-label'>Celular</label>
                    <input type="number" className='form-control' name='celular' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className='form-label'>Mensaje</label>
                    <input type="text" className='form-control' name='mensaje' required/>
                </div>
                <button type='submit' className='btn btn-primary'>Finalizar compra</button>
            </form>
        </div>
    );
}


