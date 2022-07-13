import React from 'react';
import './Header.css';

export default function Header(props){
    return <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt3">
            <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h1>
        <p className="lead text-musted">{props.subtitle}</p>
    </header>
}