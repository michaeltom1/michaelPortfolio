const Spinner = () => {
  return (
    // <div className="flex justify-center items-center h-screen">
    //   <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-gray-100"></div>
    // </div>
    <div className="flex items-center justify-center min-h-screen g-gray-900">
      <div className="relative">
        <svg
          width="100"
          height="100"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="150"
            cy="150"
            r="140"
            stroke="#2ECC71"
            strokeWidth="20"
            className="drawCircle"
          />

          <path
            // d="M72.7234 72.5455H116.26L153.192 162.602H154.897L191.828 72.5455H235.365V218H201.132V128.653H199.925L164.982 217.077H143.107L108.164 128.156H106.956V218H72.7234V72.5455Z"
            d="M89.0425 89.9091H121.695L149.394 157.452H150.672L178.371 89.9091H211.024V199H185.349V131.99H184.444L158.236 198.308H141.83L115.623 131.617H114.717V199H89.0425V89.9091Z"
            fill="white"
            className="recedeText"
          />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;

