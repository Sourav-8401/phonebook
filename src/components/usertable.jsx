import React from "react";
import userdata from "../assets/userdata.json";
function UserTable() {
  return (
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
            {userdata.phonebook.map((user, index)=>(
                <tr key={user.sn_no}>
                    <td>{user.sn_no}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile_number}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;
