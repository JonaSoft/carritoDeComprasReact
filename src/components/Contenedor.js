import React from 'react';
import './contenedor.css';
import Producto from './Producto';

const  Contenedor = ({contenedor}) => (
    <div className="contenedor">
        <h2> Flights en Análisis</h2>
        {contenedor.map(producto =>(
            <Producto
                key = {producto.id}
                producto = {producto}
            />
        ))}
    </div>
)
 
export default Contenedor;