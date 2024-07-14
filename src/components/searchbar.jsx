import React, { useState, useRef, forwardRef, useEffect, useImperativeHandle } from "react";
import { binarySearch } from "./algorithm/binarysearch";
import { sorted_matching , unsorted_matching } from "./algorithm/stringMatching";
import userdata from "../assets/userdata.json";
import detailedUserData from "../assets/detailedUserData.json"
import sortData from "./algorithm/sortData";

const Searchbar = forwardRef((props, ref) =>{
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const sortedData = sortData(detailedUserData.phonebook, "name");
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  useImperativeHandle(ref,()=>({
    focus : ()=>{
      inputRef.current.focus();
    },
  }));

  const getFilteredUsers = (input) => {
    if (!input.trim()) {
      setSuggestedUsers([]);
      return;
    }
    const filteredUsers = sorted_matching(sortedData, input, "name");
    setSuggestedUsers(filteredUsers.slice(0, 8));
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    getFilteredUsers(inputValue);
    setSearchInput(inputValue);
    const results = binarySearch(sortedData, inputValue.trim());
    console.log(results[1]);
    setSearchResults(results[0] ? [results[0]] : []);
  };

  const handleSearchToggle = () => {
    setSearchToggle(true);
  };

  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setSearchToggle(false);
      setSearchInput("");
      setSuggestedUsers([]);  
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <div className="searchMainContainer">
        <div
          ref={searchContainerRef}
          className={searchToggle ? "search-container" : "search-container_toggle"}
        >
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            className="search_bar"
            ref={inputRef}
            type="text"
            onFocus={handleSearchToggle}
            value={searchInput}
            onChange={handleInputChange}
          />
          <hr />
          <div className="suggestMainContainer">
            {suggestedUsers.map((user) => (
              <p key={user}>
                <span className="material-symbols-outlined suggest_search_icon">search</span>
                {user}
              </p>
            ))}
          </div>
        </div>
      </div>

        {searchResults.length > 0 ? (
          <>
          <p className="search_title">Search result...</p>
        <div className="search_table">
          <table>
            <thead>
              <tr>
                <th className="s_td_sno">S.NO</th>
                <th className="s_td_name">NAME</th>
                <th className="s_td_email">EMAIL</th>
                <th className="s_td_contact">CONTACT NO.</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((user, index) => (
                <tr key={user["sn.no"]}>
                  <td className="s_td_sno">{index + 1}</td>
                  <td className="s_td_name">{user.name}</td>
                  <td className="s_td_email">{user.email}</td>
                  <td className="s_td_contact">{user.mobile_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </>
        ) : (
          ""
        )}
    </>
  );
});

export default Searchbar;
