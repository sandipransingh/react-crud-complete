import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/default/Home';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import Pnf from './Component/default/Pnf';
import './App.css'

function App(props) {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>
          <Route path={`/`} element={<Home/>} />
          <Route path={`/login`} element={<Login/>} />
          <Route path={`/register`} element={<Register/>} />
          <Route path={`/*`} element={<Pnf/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
