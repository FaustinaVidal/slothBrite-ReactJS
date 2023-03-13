import React from 'react';

export const CardError = (h) => {
    return (
        <div className="card mb-3 cardProducto">
            <div className="card-body cardBody">
                <h5 className="card-title">❌ Error</h5>
                <p className="card-text">La URL ingresada no es correcta</p>
            </div>
        </div>
    );
}
