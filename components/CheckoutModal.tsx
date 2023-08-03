import {
  faLocationDot,
  faPhone,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    phone: "",
    fullName: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    postalCode: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md text-sm md:text-base overflow-auto">
        <div className="bg-white w-[100%] md:w-[500px] rounded-lg shadow-lg p-4 mx-0 md:mx-5 my-auto">
          <div className="flex justify-between items-center">
          <h2 className="font-[500] text-sm lg:text-lg">
            Please fill in the form to order
          </h2>
          <FontAwesomeIcon
              icon={faXmark}
              onClick={() => onClose(true)}
              className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer"
            />
          </div>

          {/* Product details */}
          <div className="flex items-center gap-3 justify-between my-2 py-3 border-y">
            <div className="flex items-center gap-3">
              <div className="w-[60px]">
                <img
                  className="rounded"
                  src="https://cdn.shopify.com/s/files/1/0758/7620/4821/files/Bellyburnerserum1.jpg?v=1689074832"
                />
                {/* <div>1</div> */}
              </div>
              <div>
                <h3 className="font-[500] font-[16px]">
                  Lumin Care™ Belly Burner Serum
                </h3>
              </div>
            </div>
            <div className="font-[500] font-[16px]">Rs. 899.00</div>
          </div>

          {/* Order Details */}
          <div className="my-4 bg-slate-100	p-3 rounded">
            <div className="flex justify-between my-2">
              <span>Subtotal</span>
              <span className="font-[700]">Rs. 899.00</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Shipping</span>
              <span className="font-[700]">Free</span>
            </div>
            <div className="border-t flex justify-between py-2 my-2">
              <span className="font-[700]">Total</span>
              <span className="font-[700]">Rs. 899.00</span>
            </div>
          </div>

          <div className="my-4">
            <span className="text-base mb-2 font-bold lg:text-lg">Shipping Method</span>
            <div className="flex border border-solid border-gray-400 px-4 py-2 justify-between items-center rounded-lg">
              <input type="radio" checked className="w-3 h-3 accent-black" />
              <span className="text-lg">Free</span>
            </div>
          </div>


          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
          >
            <div className="mb-4 flex text-md items-center justify-between">
              <label htmlFor="fullName" className="w-[30%] font-bold mr-1">
                Full Name
                <span className="text-red-700">*</span>
              </label>
              <div className="relative w-[70%]">
                <span className="absolute left-0 bg-[#E1E1E1] w-10 h-[38px] ml-px mt-px flex items-center justify-center rounded-tl-lg rounded-bl-lg">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[14px] h-[14px]"
                  />
                </span>
                <input
                  type="text"
                  required
                  className="focus:outline-0 w-full pl-14 border border-gray-400 rounded-lg h-10 py-2 px-3 placeholder-gray-500"
                  placeholder="Full Name"
                  value={formData.fullName}
                  name="fullName"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 flex text-md items-center justify-between">
              <label htmlFor="phone" className="w-[30%] font-bold mr-1">
                Phone Number
                <span className="text-red-700">*</span>
              </label>
              <div className="relative w-[70%]">
                <span className="absolute left-0 bg-[#E1E1E1] w-10 h-[38px] ml-px mt-px flex items-center justify-center rounded-tl-lg rounded-bl-lg">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-[14px] h-[14px]"
                  />
                </span>
                <input
                  type="number"
                  required
                  className="focus:outline-0 w-full pl-14 border border-gray-400 rounded-lg h-10 py-2 px-3 placeholder-gray-500"
                  placeholder="Phone Number"
                  value={formData.phone}
                  name="phone"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 flex text-md items-center justify-between">
              <label htmlFor="address" className="w-[30%] font-bold mr-1">
                Address Details
                <span className="text-red-700">*</span>
              </label>
              <div className="relative w-[70%]">
                <span className="absolute left-0 bg-[#E1E1E1] w-10 h-[38px] ml-px mt-px flex items-center justify-center rounded-tl-lg rounded-bl-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-[14px] h-[14px]"
                  />
                </span>
                <input
                  type="text"
                  required
                  className="focus:outline-0 w-full pl-14 border border-gray-400 rounded-lg h-10 py-2 px-3 placeholder-gray-500"
                  placeholder="Address"
                  value={formData.address}
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 flex text-md items-center justify-between">
              <label htmlFor="landmark" className="w-[30%] font-bold mr-1">
                Landmark
                {/* <span className="text-red-700">*</span> */}
              </label>
              <div className="relative w-[70%]">
                <span className="absolute left-0 bg-[#E1E1E1] w-10 h-[38px] ml-px mt-px flex items-center justify-center rounded-tl-lg rounded-bl-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-[14px] h-[14px]"
                  />
                </span>
                <input
                  type="text"
                  className="focus:outline-0 w-full pl-14 border border-gray-400 rounded-lg h-10 py-2 px-3 placeholder-gray-500"
                  placeholder="Land Mark"
                  value={formData.landmark}
                  name="landmark"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 flex text-md items-center justify-between">
              <label htmlFor="city" className="w-[30%] font-bold mr-1">
                City
                <span className="text-red-700">*</span>
              </label>
              <div className="relative w-[70%]">
                <span className="absolute left-0 bg-[#E1E1E1] w-10 h-[38px] ml-px mt-px flex items-center justify-center rounded-tl-lg rounded-bl-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-[14px] h-[14px]"
                  />
                </span>
                <input
                  type="text"
                  required
                  className="focus:outline-0 w-full pl-14 border border-gray-400 rounded-lg h-10 py-2 px-3 placeholder-gray-500"
                  placeholder="City"
                  value={formData.city}
                  name="city"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 flex text-md items-center justify-between">
              <label htmlFor="postalCode" className="w-[30%] font-bold mr-1">
                Postal Code
                <span className="text-red-700">*</span>
              </label>
              <div className="relative w-[70%]">
                <span className="absolute left-0 bg-[#E1E1E1] w-10 h-[38px] ml-px mt-px flex items-center justify-center rounded-tl-lg rounded-bl-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-[14px] h-[14px]"
                  />
                </span>
                <input
                  type="number"
                  required
                  className="w-full pl-14 border border-gray-400 rounded-lg h-10 py-2 px-3 placeholder-gray-500"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  name="postalCode"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 flex text-md items-center justify-between">
              <label htmlFor="state" className="w-[30%] font-bold mr-1">
                State
                <span className="text-red-700">*</span>
              </label>
              <select
                className="w-[70%] border border-gray-400 bg-white rounded-lg py-2 px-3 h-10 "
                name="state"
                placeholder="State"
                required
              >
                <option value="">State</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CG">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TS">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UK">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </select>
            </div>

            <p className="font-bold my-4 text-center">
              For faster delivery of your order, Please make sure the given
              address details are correct.
            </p>

            <div className="flex justify-end">
            <button type="submit" className='px-3 py-2 lg:py-4 bg-theme-main text-white w-full hover:bg-theme-main-dark transition-colors duration-200 ease-in text-sm rounded drop-shadow-xl sticky bottom-1/2 lg:text-base '>
                <div className='flex justify-center items-center gap-2'>
                  <span className='text-white font-bold'>BUY IT NOW (Place My Order)</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
