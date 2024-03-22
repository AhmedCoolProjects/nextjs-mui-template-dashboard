function UpgradeButton() {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
      <div className="relative flex flex-col items-center justify-center h-44 w-8">
        <p
          className="text-white z-[9999] font-semibold whitespace-nowrap
                      transform text-xs -rotate-90 
                      "
        >
          ✨ Upgrade to Pro
        </p>
        <svg
          width="50"
          height="270"
          viewBox="0 0 50 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 z-0 w-full h-full object-contain"
        >
          <path
            d="M17.0901 242.513C7.27394 241.07 -1.63271e-06 232.648 -2.06641e-06 222.726L-9.73567e-06 47.2739C-1.01694e-05 37.3522 7.27392 28.9303 17.0901 27.4867L24.9793 26.3266C30.7094 25.4839 35.7929 22.1987 38.9149 17.3204L50 -2.18557e-06L50 270L38.9149 252.68C35.7929 247.801 30.7094 244.516 24.9794 243.673L17.0901 242.513Z"
            fill="#5661F6"
          />
        </svg>
      </div>
    </div>
  );
}

export default UpgradeButton;
