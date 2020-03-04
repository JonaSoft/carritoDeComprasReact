import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {
//Listado de productos{}
const [ productos, guardarProductos ] = useState([
  { id:1, nombre:'ReactJS', precio: 60 },
  { id:2, nombre:'ReactJS1', precio: 70 },
  { id:3, nombre:'ReactJS2', precio: 80 },
  { id:4, nombre:'ReactJS3', precio: 90 },
  { id:5, nombre:'ReactJSMaster', precio: 100 }

]);
//Obtener Fecha 
const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header />
      <h1>Primer App</h1>
      <h2>Listado de Productos</h2>
      {productos.map(producto =>(
        <Producto 
          key = {producto.id}
          producto1 = {producto}
        />
      ))}

      <Footer
       fecha={fecha}
       />
      
    </Fragment>
  );
}

export default App;
