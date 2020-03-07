import React from 'react';
const Producto = ({producto, contenedor, agregarContenedor, productos}) => {
    const{ nombre, operator, id} = producto;
    
    //funcion para agregar al carrito de compras
    const SeleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
                agregarContenedor([
                    ...contenedor,
                    producto
                ]);
        console.log(contenedor);
        //console.log(producto)
        
    }
   
    
    return ( 
        <div>
            <h3>from bdata  {nombre}</h3>
             <p>operator: {operator} </p>
             <button
                 type="button"
                 onClick={()=> SeleccionarProducto(id)}
                 >Buscar</button>
                 
        </div>
    
     );
}
 
export default Producto ;