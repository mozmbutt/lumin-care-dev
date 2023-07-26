import React, { useState } from 'react';

const OTPModal = ({ isOpen, onClose, onSubmit }) => {
  const [otp, setOTP] = useState('');

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    // Handle OTP submission logic here
    // You can send the OTP to the server for validation, etc.
    console.log('Submitted OTP:', otp);
    // Close the OTP modal after handling the OTP
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white w-full md:w-96 rounded-lg shadow-lg p-4 mx-5">
        <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          onSubmit(otp)
        }}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 placeholder-gray-500"
              placeholder="OTP PIN"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
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
              Submit OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPModal;
