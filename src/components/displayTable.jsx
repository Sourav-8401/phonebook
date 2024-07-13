import userdata from "../assets/userdata.json";
import React, { useEffect, useState, useRef } from "react";
import sortData from "./algorithm/sortData";
import AddUser from "./addUser";
function DisplayTable() {
  const [sortedData, setSortedData] = useState([]);
  const [showData, setShowData] = useState(userdata.phonebook);
  const [addUserDialog, setAddUserDialog] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    const sorted = sortData( showData, "name");
    setSortedData(sorted);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setAddUserDialog(false);
      }
    }
    if (addUserDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addUserDialog]);

  function dosort() {
    const sorted = sortData(showData, "name");
    setShowData(sorted);
  }

  function toggleAddUser() {
    setAddUserDialog(!addUserDialog);
  }

  function handleAddUser(newUser){
    setShowData([...showData, newUser]);
    
    setAddUserDialog(false);
  }
  return (
    <>
        <button onClick={dosort} className="sortbtn">Sort</button>
        <button onClick={toggleAddUser} className="addbtn">Add</button>

      <div className={addUserDialog ? "blur-background" : ""}>
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
        {addUserDialog && (
          <div ref={dialogRef} className="add-user-dialog">
            <AddUser onAddUser={handleAddUser} />
          </div>
        )}
    </>
  );
}
export default DisplayTable;
