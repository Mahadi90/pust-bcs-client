import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Application = () => {

    const {user} = useContext(AuthContext)

    const handleSubmitApplication = e => {
        e.preventDefault()
       const form = e.target;
       const name = form.name.value;
       const session = form.session.value;
       const batch = form.batch.value;
       const department = form.department.value;
    //    console.log(name, session, batch, department)
    const roll = parseInt(Math.random()*10000)
    const applicationInfo = {
        name,
        session,
        batch,
        department,
        email : user.email,
        roll
    }
    console.log(applicationInfo)
    fetch('https://pust-vcs-job-hunter-server-775qu2355-mahadimhs787-gmailcom.vercel.app/applications', {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(applicationInfo)
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Application Submitted",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
    }

  return (
    <div>
      <form onSubmit={handleSubmitApplication} className="m-2 md:mx-10 bg-purple-500 p-10 min-h-96 mt-10">
      <h2 className=" mb-10 text-center text-5xl font-bold">Application Form</h2>
        <div className="flex-cols md:flex space-y-4  md:space-y-0 gap-6">
          <input
            name="name"
            className="w-full p-4 rounded-md"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
          name="batch"
            className="w-full p-4 rounded-md"
            type="number"
            placeholder="Enter Your Batch Number"
          />
        </div>
      <div className="flex-cols md:flex space-y-4 mt-6 md:space-y-0 gap-6">
      <input
      name="session"
            className="w-full p-4 rounded-md"
            type="text"
            placeholder="Enter Your Session"
          />
      <select name="department" className="select w-full font-bold">
          <option  value='Select Department'>
            Select Department
          </option>
          <option>BBA</option>
          <option>THM</option>
          <option>CHEMISTRY</option>
          <option>PHYSICS</option>
          <option>MATH</option>
          <option>STATISTICS</option>
          <option>PHARMACY</option>
          <option>GE</option>
          <option>CSE</option>
          <option>EEE</option>
          <option>EECE</option>
          <option>ARCHITECTURE</option>
          <option>CIVIL</option>
          <option>ICE</option>
          <option>URP</option>
          <option>SOCIAL WORK</option>
          <option>BANGLA</option>
          <option>ECONOMICS</option>
          <option>HISTORY</option>
          <option>PUBLIC ADMINISTRATION</option>
          <option>ENGLISH</option>
        </select>
      </div>
     <div className="mx-auto text-center mt-10"> <button className="btn btn-primary">Submit</button></div>
      </form>
    </div>
  );
};

export default Application;
