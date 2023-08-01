const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center backdrop-blur-md overflow-auto">
      <div className="bg-white w-full md:w-[32%] rounded-lg shadow-lg p-8 mx-5 my-auto">
        <h2 className=" text-center text-2xl font-semibold mb-4">
          You Have Been Selected To Win The Gift!
        </h2>

        <h2 className=" text-center text-normal font-semibold">
          We will call/sms you as soon as possible to confirm your address.
        </h2>
        <h2 className=" text-center text-normal font-semibold">
          Your order will be shipped out within 1 business day.
        </h2>
        
        <h2 className=" text-center text-2xl font-semibold mt-6">
          Your Order will Arrive in Our Branded Box
        </h2>
        
        <p className="mt-4 text-center">
          Your package will arrive in our branded box, so please keep an eye out for it when our drivers deliver the product to your doorstep. Our branded box is easy to spot, and it ensures that your order arrives safely and securely
        </p>

        <img loading="lazy" src="/assets/images/slider1.webp" className="rounded mx-auto mt-4 w-[65%]" alt="" />
        
        <h2 className=" text-center text-xl font-semibold mt-6">
          Pay On Delivery With:
        </h2>

        <img loading="lazy" src="/assets/images/ty-page-logos.jpeg" className="mx-auto mt-2 w-[65%]" alt="" />

        <button
          type="submit"
          onClick={() => onClose(false)}
          className="bg-theme-main hover:bg-theme-main-dark text-white font-bold py-2 px-4 rounded w-full my-3"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
