import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import MakingTheWine from './components/MakingTheWine/MakingTheWine';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import React from 'react';


function App() {

  const location = useLocation();
  const { pathname } = location;

  const boolAddComponent =
    pathname === '/' ||
    pathname === '/shop' ||
    pathname.startsWith('/item/') ||
    pathname === '/makingthewine';

  return (
    <>
      {boolAddComponent && <Navbar />}

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/shop'} element={<ItemListContainer/>} />
        <Route path={'/item/:id'} element={<ItemDetail/>} />
        <Route path={'/makingthewine'} element={<MakingTheWine/>} />
      </Routes>
    </>
  )
}

export default App
