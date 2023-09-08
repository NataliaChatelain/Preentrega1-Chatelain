import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  )
}

export default App
