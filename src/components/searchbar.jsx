import React, { useState } from "react";
import { binarySearch } from "./algorithm/search";
import userdata from "../assets/userdata.json";
import sortData from "./algorithm/sortData";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const sortedData = sortData(userdata.phonebook, "name");

  const getFilteredUsers = (input) => {
    if (!input.trim()) {
      setSuggestedUsers([]);
      return;
    }

    // Filter users whose names start with input (case insensitive)
    const filteredUsers = userdata.phonebook.filter((user) =>
      user.name.toLowerCase().startsWith(input.toLowerCase())
    );

    // Limit to 6 suggestions
    setSuggestedUsers(filteredUsers.slice(0, 6));
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    getFilteredUsers(inputValue);
    setSearchInput(inputValue);
    const results = binarySearch(sortedData, inputValue.trim());
    setSearchResults(results ? [results] : []);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <div className="searchMainContainer">
        <div className="search-container">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            className="search_bar"
            type="text"
            value={searchInput}
            onChange={handleInputChange}
          />
          <hr />
          <div className="suggestMainContainer">
            {suggestedUsers.map((user) => (         
                <p><span className="material-symbols-outlined suggest_search_icon">search</span>{user.name}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="search_table">
        {searchResults.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CONTACT NO.</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((user, index) => (
                <tr key={user["sn.no"]}>
                  <td>{index + 1} </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Searchbar;
