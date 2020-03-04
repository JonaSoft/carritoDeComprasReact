import React from 'react';

function Header(){
    const anio =new Date().getFullYear();
    return(
    <h1>Desde Header {anio}</h1>
    )
}

export default Header;