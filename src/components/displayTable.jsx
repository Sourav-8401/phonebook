import userdata from "../assets/userdata.json";
import React, { useEffect, useState, useRef } from "react";
import sortData from "./algorithm/sortData";
import AddUser from "./addUser";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function DisplayTable({onSearchClick}) {
  const [sortedData, setSortedData] = useState([]);
  const [showData, setShowData] = useState(userdata.phonebook);
  const [addUserDialog, setAddUserDialog] = useState(false);
  const dialogRef = useRef(null);
  // useEffect(() => {
  //   const sorted = sortData(showData, "name");
  //   setSortedData(sorted);
  // }, []);

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

  function dosort(key) {
    const sorted = sortData(showData, key);
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
        <div className="left_btn_container">
        <span class="material-symbols-outlined">data_table</span>
        <p className="table_title">Table</p>
        <span title="filter" class="material-symbols-outlined fiter_icon">filter_list</span>
        {/* <p>Filter</p> */}
        <span title="search" class="material-symbols-outlined fiter_icon" onClick={onSearchClick}>search</span>
        </div>
        <div className="right_btn_container">
        <Menu as="div" className="relative mx-2 inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md focus:outline-none px-4 py-1.5  text-sm font-semibold text-white shadow-sm bg-zinc-700  ">
          Sort
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5   text-white" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-600 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              onClick={()=>dosort("name")}
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-zinc-700 data-[focus]:text-white"
            >
              Name
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={()=>dosort("email")}
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-zinc-700 data-[focus]:text-white"
            >
              Email
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={()=>dosort("contact")}
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-zinc-700 data-[focus]:text-white"
            >
              Contact
            </a>
          </MenuItem>
          <form action="#" method="POST">
          </form>
        </div>
      </MenuItems>
    </Menu>

        <button onClick={toggleAddUser} className="addbtn inline-flex focus:outline-none justify-center gap-x-1.5 rounded-md  px-4 py-1  text-sm font-semibold text-white  ">
          <p>Add</p>
          <span class="material-symbols-outlined">add</span>
        </button>

        </div>

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
