import React from 'react';
const Producto = ({flight, contenedor, agregarContenedor, flights}) => {
    const{ nombre, operator, id} = flight;
    
    //funcion para agregar al carrito de compras
    const SeleccionarProducto = id => {
        const flight = flights.filter(flight => flight.id === id)[0];
                agregarContenedor([
                    ...contenedor,
                    flight
                ]);
    }
   
    const EliminarProducto = id => {
        const flights = contenedor.filter(flight => flight.id !== id);
        //colocar flight en el State
        agregarContenedor(flights)
    }

    

    
    return ( 
        <div>
            <h3>from bdata:  {nombre}</h3>
            <p>operator: {operator} </p>
            {flights
            ?
            (
                <button
                 type="button"
                 onClick={()=> SeleccionarProducto(id)}
                 >Search
                </button>
            )
            :
            (
                <button
                 type="button"
                 onClick={()=> EliminarProducto(id)}
                 >Delete
                </button>
            )
            } 
                 
        </div>
    
     );
}
 
export default Producto ;