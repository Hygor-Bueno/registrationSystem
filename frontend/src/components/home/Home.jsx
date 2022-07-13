import React from 'react';
import Main from '../templates/Main';

export default function Home(props){
    return(
        <Main icon="home" title="Início" subtitle="Projeto react...">
            <div className="display-4">Bem Vindo!</div>
            <hr/>
            <p className="mb-0">Sistema  simplificado de cadastro em React!</p>
        </Main>
    )
}