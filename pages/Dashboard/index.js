import React from 'react'

function index() {
  return (
    <div className="bg-gray-100">

    <div class="flex">

<div className="bg-blue-600 text-white min-h-screen w-64 p-4 mt-100">
    <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
    <ul className="space-y-2">
        <li><a href="/Home" className="hover:text-blue-300">Home</a></li>
        <li><a href="/FindShipment" className="hover:text-blue-300">Track Shipment</a></li>
        <li><a href="/AddDriver " className="hover:text-blue-300">Add Driver</a></li>
        <li><a href="/AddShipment" className="hover:text-blue-300">Add Shipment</a></li>
    </ul>
</div>

<div className="w-3/4 p-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Total Users</h2>
            <p className="text-3xl font-bold">245</p>
        </div>

     
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
            <p className="text-3xl font-bold">789</p>
        </div>

    
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Total Products</h2>
            <p className="text-3xl font-bold">123</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-3xl font-bold">$32,567</p>
        </div>
    </div>

   
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-4">Sales Chart</h2>
        <div className="w-full h-40 bg-gray-300"></div>
    </div>

    
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className="text-left">Order ID</th>
                    <th className="text-left">Customer</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#12345</td>
                    <td>John Doe</td>
                    <td>2023-09-20</td>
                    <td>Shipped</td>
                </tr>
                <tr>
                    <td>#12346</td>
                    <td>Jane Smith</td>
                    <td>2023-09-19</td>
                    <td>Delivered</td>
                </tr>
            
            </tbody>
        </table>
    </div>
</div>
</div>

</div>
  )
}

export default index