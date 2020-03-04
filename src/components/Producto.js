import React from 'react';

const Producto = ({producto1}) => {
    const{ nombre, precio, id} = producto1
    //funcion para agregar al carrito de compras
    const SeleccionarProducto =()=>{
        console.log('comprado.....')
    }
    return ( 
        <div>
            <h3>desde producto {nombre}</h3>
             <p>precio: {precio} USD</p>
             <button
                 type="button"
                 onClick={()=> SeleccionarProducto()}
                 >Comprar</button>
        </div>
    
     );
}
 
export default Producto ;