import React from "react";
function Searchbar() {
  return (
    <>
      <h1>Phonebook</h1>
      <div className="search-container">
        <span className="material-symbols-outlined search-icon">search</span>
        <input className="search_bar" type="text" />
      </div>
    </>
  );
}
export default Searchbar;
