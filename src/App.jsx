import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from './components/searchbar'
import DisplayTable from './components/displayTable'
import AddUser from './components/addUser'
function App() {

  return (<>
    <Searchbar ></Searchbar>
     <DisplayTable></DisplayTable>
    </>
  )
}

export default App
