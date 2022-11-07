import React from 'react';

function Competidor() {
    return(
        <div className='contenedor-competidor'>
            <img className='imagen-competidor'
            src={'../imagenes/imagen-gazir.jfif'}
            alt='imagen gazir'/>
            <div className='contenedor-texto-competidor'>
                <p className='nombre-competidor'>Texto</p>
                <p className='titulo-competidor'>Texto</p>
                <p className='frase-competidor'>Texto</p>
            </div>
        </div>
    )
}

export default Competidor;