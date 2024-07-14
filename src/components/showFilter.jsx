import React, { useEffect, useState } from "react";
import detailedUserData from "../assets/detailedUserData.json";
import { filter } from "./algorithm/filter";

function ShowFilter({toggleFilter, filterKey}) {
  const [filterFav, setFilterFav] = useState([]);

  useEffect(() => {
    if (toggleFilter) {
      let favData = filter(detailedUserData.phonebook, filterKey , "category");
      setFilterFav(favData);
    } else {
      setFilterFav([]);
    }
  }, [toggleFilter, filterKey]);
  return (
    <>
      {toggleFilter && (
        <>
        <p className="search_title">Filter result...</p>
        <div className="table-container search_table">
          <table class="table-auto">
            <thead>
              <tr>
                <th className="s_td_sno">S.NO</th>
                <th className="s_td_name">NAME</th>
                <th className="s_td_email">EMAIL</th>
                <th className="s_td_contact">Category</th>
              </tr>
            </thead>
            <tbody>
            {filterFav.map((user, index)=>(
              <tr key={user.name}>
              <td className="s_td_sno">{index + 1}</td>
              <td className="s_td_name">{user.name}</td>
              <td className="s_td_email">{user.email}</td>
              <td className="s_td_contact">{user.category}</td>
              </tr>))}
            </tbody>
          </table>
        </div>
        </>
      )}
    </>
  );
}

export default ShowFilter;
