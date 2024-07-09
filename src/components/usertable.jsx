import userdata from "../assets/userdata.json";
import React, { useEffect, useState, useRef } from "react";
import sortData from "./sortData";
import AddUser from "./addUser";
function UserTable() {
  const [sortedData, setSortedData] = useState([]);
  const [showData, setShowData] = useState(userdata.phonebook);
  const [showAddUser, setShowAddUser] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    const sorted = sortData("name");
    setSortedData(sorted);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowAddUser(false);
      }
    }
    if (showAddUser) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAddUser]);

  function dosort() {
    setShowData(sortedData);
  }

  function toggleAddUser() {
    setShowAddUser(!showAddUser);
  }

  return (
    <>
        <button onClick={dosort} className="sortbtn">Sort</button>
        <button onClick={toggleAddUser} className="addbtn">Add</button>

      <div className={showAddUser ? "blur-background" : ""}>
        <div className="table-container">
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
              {showData.map((user, index) => (
                <tr key={user["sn.no"]}>
                  <td>{index + 1} </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        {showAddUser && (
          <div ref={dialogRef} className="add-user-dialog">
            <AddUser />
          </div>
        )}
    </>
  );
}
export default UserTable;
