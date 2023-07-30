import React, { useState } from 'react';

const OTPModal = ({ isOpen, onClose, isDisabled, onSubmit }) => {
  const [otp, setOTP] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-md">
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
              disabled={isDisabled}
              className="bg-theme-main hover:bg-theme-main-dark text-white font-bold py-2 px-4 ml-2 rounded disabled:opacity-25"
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
