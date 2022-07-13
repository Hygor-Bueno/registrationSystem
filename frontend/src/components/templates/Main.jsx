import React from 'react';
import './Nav.css';
import Header from './Header';

export default function Nav(props){
    return <React.Fragment>
        <Header {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>
}