import React from 'react';
import './Nav.css';
import Header from './Header';

export default function Nav(props){
    return <React.Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>
}