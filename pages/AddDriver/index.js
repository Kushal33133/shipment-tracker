import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [VehicleNumber, setVehicleNumber] = useState();
  const [LicenseNumber, setLicenseNumber] = useState();
  const [ContactNumber, setContactNumber] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const intValue1 = parseInt(VehicleNumber, 10);
    const intValue2 = parseInt(LicenseNumber, 10);
    const intValue3 = parseInt(ContactNumber, 10);
    axios
      .post("http://localhost:3000/api/adddriver", {
        intValue1,
        intValue2,
        intValue3,
      })
      .then((res) => {
        router.push('/Login')
     
      })
      .catch((err) => console.log(err));
  };
  return (

    <div className="bg-gray-100">
    <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Driver Registration</h1>
        <form action="#" method="POST"  onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="vehicleNumber">
                    Vehicle Number
                </label>
                <input
                onChange={(e) => setVehicleNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vehicleNumber" type="text" placeholder="Vehicle Number"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="licenseNumber">
                    License Number
                </label>
                <input 
                onChange={(e) => setLicenseNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="licenseNumber" type="text" placeholder="License Number"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="contactNumber">
                    Contact Number
                </label>
                <input
                onChange={(e) => setContactNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="tel" placeholder="Contact Number"/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Register
                </button>
            </div>
        </form>
    </div>
</div>

  );
};

export default index;
