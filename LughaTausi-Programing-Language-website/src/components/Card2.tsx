import React from "react";

const Card2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 my-12 p-4">
      {/* New Card */}
      <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-purple-300 p-6 md:p-8 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 w-full max-w-xl md:max-w-5xl h-auto md:h-[80vh] flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Your New Card Title
          </h2>
          <p className="text-lg md:text-2xl mb-4 md:mb-6">
            This is an enlarged description for the new card. It fits well with the landing page and now covers more space.
          </p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg self-start transition-colors duration-300">
          Learn More
        </button>
      </div>

      {/* Huge Card */}
      <div className="bg-gradient-to-b from-gray-900 via-purple-800 to-gray-900 text-purple-300 p-6 md:p-8 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 w-full max-w-xl md:max-w-5xl h-auto md:h-[80vh] flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Huge Card
          </h2>
          <p className="text-lg md:text-2xl mb-4 md:mb-6">
            This huge card has been enlarged and follows the new gray and purple color gradient.
          </p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg self-start transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Card2;
