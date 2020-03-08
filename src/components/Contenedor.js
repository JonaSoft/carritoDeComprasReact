import React from 'react';
import './contenedor.css';
import Producto from './Producto';

const  Contenedor = ({contenedor, agregarContenedor}) => (
    <div className="contenedor">
        <h2> Flights en Análisis</h2>

        {contenedor.length === 0
            ?
                <p>There are not flights</p>

            : contenedor.map(producto =>(
                <Producto
                    key = {producto.id}
                    flight = {producto}
                    contenedor = {contenedor}
                    agregarContenedor = {agregarContenedor}
                />
            ))
        }
    </div>
)
 
export default Contenedor;