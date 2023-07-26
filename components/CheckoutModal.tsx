import React, { useState } from 'react';

const CheckoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(formData);

    // Assuming you have an API endpoint at https://example.com/api/checkout
    fetch('https://example.com/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response if needed
        console.log(data);
        // Close the modal after successful API call
        onClose();
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white w-full md:w-[35%] rounded-lg shadow-lg p-4 mx-5">
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 placeholder-gray-500"
              placeholder="Phone"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 placeholder-gray-500"
              placeholder="First Name"
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 placeholder-gray-500"
              placeholder="Last Name"
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 placeholder-gray-500"
              placeholder="Address"
              value={formData.address}
              name="address"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 placeholder-gray-500"
              placeholder="City"
              value={formData.city}
              name="city"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 placeholder-gray-500"
              placeholder="State"
              value={formData.state}
              name="state"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-theme-main hover:bg-theme-main-dark text-white font-bold py-2 px-4 ml-2 rounded"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;