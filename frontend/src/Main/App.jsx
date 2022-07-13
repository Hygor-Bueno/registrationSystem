import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';

import Logo from '../components/templates/Logo';
import Nav from '../components/templates/Nav';
import RootRoute from './RootRoutes';
import Footer from '../components/templates/Footer';

export default function App(props){
    return (
        <BrowserRouter>
            <div className="app">
                <Logo/>
                <Nav/>
                <RootRoute />
                <Footer/>
            </div>
        </BrowserRouter>
    )
}