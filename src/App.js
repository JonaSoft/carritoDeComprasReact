import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Contenedor from './components/Contenedor';

function App() {
//Listado de VUELOS{}
const [ flights, guardarFlights ] = useState([
  { id:1, nombre:'AF3650', operator: 60 },
  { id:2, nombre:'AF4585', operator: 70 },
  { id:3, nombre:'AM5656', operator: 80 },
  { id:4, nombre:'AM7585', operator: 90 },
  { id:5, nombre:'AM4697', operator: 100 }
]);
const [contenedor, agregarContenedor] = useState([])
//Obtener Fecha 
const fecha = new Date().getFullYear();
  return (
    <Fragment>
        <Header />
        
        <h2>List Flights</h2>
        
        {flights.map(producto =>(
            <Producto 
                key = {producto.id}
                flight = {producto}
                flights = {flights}
                contenedor = {contenedor}
                agregarContenedor = {agregarContenedor}
            />
        ))}
         <Contenedor
             contenedor = {contenedor}
             agregarContenedor = {agregarContenedor}
          />
        <Footer
       
        fecha={fecha}
        />
      
    </Fragment>
  );
}

export default App;
