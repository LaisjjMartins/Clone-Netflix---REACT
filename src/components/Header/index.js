import React from 'react';
import "./styles.css"

export function Header({black}) {
    return (
        /*Configurando quando a linha preta vai aparecer, ou não */
        <header className={black ? 'black': ''}> 
            <div className='header-logo'>
                <a href=''>
                    <img src="https://logopng.com.br/logos/netflix-94.png" />
                </a>
            </div>
            <div className='header-user'>
                <a href=''>
                    <img src="https://i.pinimg.com/474x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" />
                </a>
            </div>
        </header>
    )
}