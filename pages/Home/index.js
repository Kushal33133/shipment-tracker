import React from 'react'

const index = () => {
  return ( 
     <>  
       <nav className="bg-blue-600 py-4">
    <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">Your Logistics</a>
        <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:underline">Home</a></li>
            <li><a href="/AddShipment" className="text-white hover:underline">Add Shipment</a></li>
            <li><a href="#" className="text-white hover:underline">About</a></li>
            <li><a href="/Contact" className="text-white hover:underline">Contact</a></li>
        </ul>
    </div>
</nav>

<section className="bg-blue-600 py-20 text-white">
    <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Efficient Logistics Solutions</h1>
        <p className="text-lg mb-8">Delivering your goods with precision and care.</p>
        <a href="#" className="bg-white text-blue-600 hover:bg-blue-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out">Get Started</a>
    </div>
</section>

<section class="py-16">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Our Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Freight Shipping</h3>
                <p class="text-gray-600">We offer efficient and secure freight shipping services.</p>
            </div>

            
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Warehousing</h3>
                <p class="text-gray-600">Our state-of-the-art warehouses are designed for your storage needs.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Custom Logistics</h3>
                <p class="text-gray-600">Tailored logistics solutions to meet your unique requirements.</p>
            </div>
        </div>
    </div>
</section>
<section class="bg-blue-600 text-white py-16">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Contact Us</h2>
        <p class="text-lg mb-8">Have questions or need assistance? Contact our team today.</p>
        <a href="#" class="bg-white text-blue-600 hover:bg-blue-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out">Contact Us</a>
    </div>
</section>

<footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto text-center">
        <p>&copy; 2023 Your Logistics. All rights reserved.</p>
    </div>
</footer>
</>


  )
}

export default index