import React from "react";

const Navbar = () => {
  return (
    <div className="bg-indigo-400 p-4">
      <div className="flex justify-between">
        <div>
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div>{/* navbar options goes here */}</div>
      </div>
    </div>
  );
};

export default Navbar;
