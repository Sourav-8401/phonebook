import React, { useState } from "react";
function AddUser({onAddUser}){

    const [newUserData, setNewUserData] = useState({
        name : "",
        email : "",
        mobile_number : "",
        country_code : "+91",
        category : "null",
        call_duration : "0"
    });    
    function handleChange(e){
        const {name , value} = e.target;
        setNewUserData({...newUserData, [name]: value });
    }
    function handleAddUser(){
        const {name , email, mobile_number} = newUserData;
        if(!name){
            alert("Please enter Name");
            return;
        }else if(!email){
            alert("Please enter Email");
            return;
        }else if(!mobile_number){
            alert("Please enter Contact Number");
            return;
        }
        onAddUser(newUserData); 
        alert("ADDED");
        setNewUserData({
            name : "",
            email : "",
            mobile_number : ""
        })
    }
    return(<>
    <div  className="adduser_main_container">
        <h1 className="adduser_heading">Create new user</h1>
        <hr className="hr_option"/>
        <div className="input_container">
            <input type="text" name="name" placeholder="Enter your name..." value={newUserData.name} onChange={handleChange} className="name userInput" id="Name" />

            <input type="text" name="email" placeholder="Enter your email..." value={newUserData.email} onChange={handleChange} className="email userInput" id="Email" />

            <input type="text" name="mobile_number" placeholder="Enter your mobile number..." value={newUserData.mobile_number} onChange={handleChange} className="contact userInput" id="contact" />
        </div>
        <button className="add_btn" onClick={handleAddUser}>Add</button>
    </div>
    </>)
}
export default AddUser