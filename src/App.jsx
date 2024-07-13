import { useRef, useState } from 'react'
import React from 'react'
import './App.css'
import Searchbar from './components/searchbar'
import DisplayTable from './components/displayTable'
import AddUser from './components/addUser'
function App() {
  const searchInput = useRef(null);

  const handleSearchClick = ()=>{
    if(searchInput.current){
      searchInput.current.focus();
    }
  };


  return (<>
    <Searchbar ref={searchInput}></Searchbar>
     <DisplayTable onSearchClick={handleSearchClick}></DisplayTable>
    </>
  )
}

export default App
