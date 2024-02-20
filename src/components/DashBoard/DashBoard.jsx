import React, { useEffect, useRef, useState } from "react";
import ApplicantTable from "./ApplicantTable";
import { FaDownload } from "react-icons/fa";
import ReactToPrint from "react-to-print";

const DashBoard = () => {
 const [totalApplication, setTotalApplication] = useState([])
 const ref = useRef()

useEffect(() => {
  fetch('https://pust-vcs-job-hunter-server-775qu2355-mahadimhs787-gmailcom.vercel.app/applicants')
  .then(res => res.json())
  .then(data =>  setTotalApplication(data))
},[])
//   console.log(totalApplication)


  return (
    <div>
      
      <div className="flex justify-evenly my-6">
      <h2 className="text-center text-2xl font-bold">Admin DashBoard</h2>
      <ReactToPrint trigger={() => <button className="flex btn btn-primary"><FaDownload></FaDownload> Applicants Information</button>} content={() => ref.current}></ReactToPrint>
      </div>
      
      <div className="mx-2 md:mx-20 text-center mt-6" ref={ref}>
      <h3 className="text-center text-2xl mb-4">
        Total Applicants : {totalApplication.length}
      </h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-purple-500 text-white">
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Session</th>
            </tr>
          </thead>
          <tbody>
            {totalApplication.map((applicants, index) => (
              <ApplicantTable
              index={index}
                key={applicants._id}
                applicants={applicants}
              ></ApplicantTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
