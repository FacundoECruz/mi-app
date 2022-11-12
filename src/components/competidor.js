import React from 'react';
import '../stylesheets/Competidor.css'

function Competidor(props) {
    return(
        <div className='contenedor-competidor'>
            <img className='imagen-competidor'
            src={require('../images/imagen-gazir.jpg')}
            alt='imagen gazir'/>
            <div className='contenedor-texto-competidor'>
                <p className='nombre-competidor'>{props.nombre} de {props.pais}</p>
                <p className='titulo-competidor'>{props.titulo}</p>
                <p className='frase-competidor'>{props.frase}</p>
            </div>
        </div>
    )
}

export default Competidor;