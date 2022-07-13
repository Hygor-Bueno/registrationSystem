import React from 'react';
import './Nav.css';

export default function Nav(props){
    return <aside className="menu-area">
        <nav className="menu">
            {/* Refatora no fim do projeto... Criar componente NavItem*/}
            <a href="#/">
                <i className="fa fa-home"></i> Inicio
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>
}