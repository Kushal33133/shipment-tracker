import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/api/register',{name,email,password})
    .then(res=>{
      router.push('/Login')
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">

<div className="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>

   
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input   onChange={(e)=>setName(e.target.value)}  type="text" id="name" name="name" placeholder="Full Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input   onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
        </div>

        <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input   onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
        </div>

       

        <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Register</button>
        </div>
    </form>

    <div className="mt-6 text-center">
        <p className="text-gray-600">Already have an account?</p>
        <a href="/Login" className="text-blue-500 hover:underline">Log in here</a>
    </div>
</div>

</div>

  )
}

export default index