import React, { useState } from "react";
function AddUser({onAddUser}){

    const [newUserData, setNewUserData] = useState({
        name : "",
        email : "",
        mobile_number : ""
    });    
    function handleChange(e){
        const {name , value} = e.target;
        setNewUserData({...newUserData, [name]: value });
    }
    function handleAddUser(){
        onAddUser(newUserData);
        setNewUserData({
            name : "",
            email : "",
            mobile_number : ""
        })
    }
    return(<>
    <div className="adduser_main_container">
        <h1 className="adduser_heading">adduser</h1>
        <div className="input_container">
            <label htmlFor="Name">Name</label><br />
            <input type="text" name="name" value={newUserData.name} onChange={handleChange} className="name userInput" id="Name" /><br />

            <label htmlFor="Email">Email</label><br />
            <input type="text" name="email" value={newUserData.email} onChange={handleChange} className="email userInput" id="Email" /><br />

            <label htmlFor="contact">Contact no</label><br />  
            <input type="text" name="mobile_number" value={newUserData.mobile_number} onChange={handleChange} className="contact userInput" id="contact" />
        </div>
        <button className="add_btn" onClick={handleAddUser}>Add</button>
    </div>
    </>)
}
export default AddUser