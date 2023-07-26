const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white w-full md:w-[35%] rounded-lg shadow-lg p-4 mx-5">
        <h2 className="text-xl font-semibold mb-4">Thank You for you Order</h2>
        <button
              type="submit"
              onClick={() => onClose(false)}
              className="bg-theme-main hover:bg-theme-main-dark text-white font-bold py-2 px-4 ml-2 rounded"
            >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
