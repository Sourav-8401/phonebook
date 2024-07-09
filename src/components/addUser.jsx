import React, { useState } from "react";
function AddUser(){

    const {newUserData, setNewUser} = useState({});
    function returnUser(){
        const name = document.getElementsByClassName("name");
        const email = document.getElementsByClassName("email");
        const contact = document.getElementsByClassName("contact");
        const newuser = {name : name, email : email, mobile_number : contact};
        setNewUser(newuser);
    }
    return(<>
    <div className="adduser_main_container">
        <h1 className="adduser_heading">adduser</h1>
        <div className="input_container">
            <label htmlFor="Name">Name</label><br />
            <input type="text" className="name userInput" id="Name" /><br />

            <label htmlFor="Email">Email</label><br />
            <input type="text" className="email userInput" id="Email" /><br />

            <label htmlFor="contact">Contact no</label><br />  
            <input type="text" className="contact userInput" id="contact" />
        </div>
        <button className="add_btn">Add</button>
    </div>
    </>)
}
export default AddUser