import userdata from "../assets/userdata.json";
import React, { useEffect, useState, useRef } from "react";
import sortData from "./algorithm/sortData";
import AddUser from "./addUser";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function DisplayTable() {
  const [sortedData, setSortedData] = useState([]);
  const [showData, setShowData] = useState(userdata.phonebook);
  const [addUserDialog, setAddUserDialog] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    const sorted = sortData(showData, "name");
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

  function handleAddUser(newUser) {
    setShowData([...showData, newUser]);

    setAddUserDialog(false);
  }
  return (
    <>
      <div className="btn_mainContainer">
      <Menu as="div" className="relative mx-2 inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-4 py-2  text-sm font-semibold text-white shadow-sm   hover:bg-sky-600">
          Sort
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5  border- text-white" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              onClick={dosort}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Name
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Email
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Contact
            </a>
          </MenuItem>
          <form action="#" method="POST">
          </form>
        </div>
      </MenuItems>
    </Menu>


        {/* <button onClick={dosort} className="sortbtn">
          <p>Sort</p>
          <span class="material-symbols-outlined drop_down_icon">
            keyboard_arrow_down
          </span>
        </button> */}
        <button onClick={toggleAddUser} className="addbtn">
          <p>Add</p>
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
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
