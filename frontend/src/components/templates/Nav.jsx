import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav(props){
    return <aside className="menu-area">
        <nav className="menu">
            {/* Refatora no fim do projeto... Criar componente NavItem*/}
            <Link to="/GLOBAL/View/build/">        
                <i className="fa fa-home"></i> Inicio          
            </Link>
            <Link to="/GLOBAL/View/build/users">               
                <i className="fa fa-users"></i> Usuários             
            </Link>
        </nav>
    </aside>
}

