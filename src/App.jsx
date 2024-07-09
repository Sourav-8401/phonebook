import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from './components/serchbar'
import UserTable from './components/usertable'
import AddUser from './components/addUser'
function App() {

  return (<>
    <Searchbar></Searchbar>
     <UserTable></UserTable>
    </>
  )
}

export default App
