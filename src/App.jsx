import { useRef, useState } from 'react'
import React from 'react'
import './App.css'
import Searchbar from './components/searchbar'
import DisplayTable from './components/displayTable'
import ShowFilter from './components/showFilter'
import AddUser from './components/addUser'
function App() {
  const searchInput = useRef(null);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [filterKey, setFilterKey] = useState("school");
  const handleFilterToggle = ()=>{
    setToggleFilter(!toggleFilter);
  }
  const handleSearchClick = ()=>{
    if(searchInput.current){
      searchInput.current.focus();
    }
  };
  const combineAction = (filterKey)=>{
    handleFilterToggle();
    setFilterKey(filterKey);
  }

  return (<>
    <Searchbar ref={searchInput}></Searchbar>
     <ShowFilter toggleFilter={toggleFilter} filterKey={filterKey}></ShowFilter>
     <DisplayTable onSearchClick={handleSearchClick} onFilterToggle={handleFilterToggle} combineAction={combineAction}></DisplayTable>
    </>
  )
}

export default App
