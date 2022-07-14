import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default function RootRoute(props){
    return(
        <Routes>
            <Route exact path="/GLOBAL/View/build/" element={<Home/>} />
            <Route path="/GLOBAL/View/build/users" element={<UserCrud/>} />
            <Route to="/GLOBAL/View/build/" element={<Home/>}/>
        </Routes>
    )
}