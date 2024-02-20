import React, { useContext, useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { AuthContext } from "../../providers/AuthProvider";

const AdmitCard = () => {

    const { user } = useContext(AuthContext)


    const ref = useRef()
  const [admitcard,setAdmitcard] = useState([])

  useEffect(() => {
    fetch(`https://pust-vcs-job-hunter-server-775qu2355-mahadimhs787-gmailcom.vercel.app/applications?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        data.map(item => setAdmitcard(item))
    })
  },[user])


//   console.log(admitcard)

  return (
    <div className="bg-purple-400 h-full text-center py-10">
      {
        admitcard?.email === user?.email && user ?<>
         <div
        ref={ref}
          style={{ width: "595px", height: "842px" }}
          className="bg-white mx-auto"
        >
          <h2 className="font-bold text-2xl pt-4 text-purple-500">Pust Bcs Job Hunt</h2>
          <p className="font-bold text-xl text-purple-500">
            Pabna University of Science and Technology
          </p>
          <div className="text-start ps-10 pt-10">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody className="font-bold">
                  <tr>
                    <td>Roll</td>
                    <td>: 2024{admitcard.roll}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>: {admitcard.name}</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>: {admitcard.department}</td>
                  </tr>
                  <tr>
                    <td>Session</td>
                    <td>: {admitcard.session}</td>
                  </tr>
                  <tr>
                    <td>Batch</td>
                    <td>: {admitcard.batch}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>: 11:00 AM</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>: 24 February 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-md ps-4 mt-4 font-bold text-green-600 text-start">
              Vanue : Gallery-1 and Gallery-2
            </h2>
            <div className="flex justify-end">
              <div className="w-1/2 text-center me-2 mt-2">
                <h2 className="font-bold">Organized By</h2>
                <h2 className="font-bold">Dr. Md. Kamruzzaman, Professior</h2>
                <p>
                  Department of Business Administration <br /> Pabna University of
                  Science and Technology
                </p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="text-start">
            <h2 className="font-bold ms-6">নির্দেশনাবলী:</h2>
            <p className="mx-6">
              ১। অনলাইনে প্রদত্ত প্রবেশপত্র অবশ্যই A4 সাইজের অফসেট কাগজে প্রিন্ট
              করতে হবে। <br />
              ২। পরীক্ষা আরম্ভ হওয়ার অন্তত ১৫ মিনিট পূর্বে প্রার্থীকে পরীক্ষা
              কেন্দ্রে উপস্থিত হতে হবে। <br />
              ৩। ক্যালকুলেটর, মেমোরি যুক্ত ঘড়ি, মোবাইল ফোন, ব্লু-টুথ বা
              টেলিযোগাযোগ করা যায় এরূপ কোন ইলেকট্রনিক যন্ত্রসহ পরীক্ষার হলে
              প্রবেশ সম্পূর্ণভাবে নিষিদ্ধ।
            </p>
          </div>
        </div>
        <ReactToPrint trigger={() => <button className="btn btn-info mt-4 text-white">
        Download Admit Card
      </button>} content={() => ref.current}></ReactToPrint>
        </>
        : 
        <h2 className="my-52 text-center text-3xl">You Have to Submit the application before download Admit card</h2>
      }
      
    </div>
  );
};

export default AdmitCard;
