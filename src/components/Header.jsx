import React from 'react';
import './header.css';

function Header(){
    const anio =new Date().getFullYear();
    return(
    <div className="">
            <h1>Data Code Share {anio}</h1>
    </div>

    )
}

export default Header;