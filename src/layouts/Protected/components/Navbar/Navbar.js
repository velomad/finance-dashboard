import React from "react";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="grid grid-cols-12">
        <div className="col-span-2 place-self-center">
          <span className="text-blue-400">Finance</span><span className="text-blue-500 font-semibold">Dash</span>
        </div>
        <div className="col-span-8 px-2">
          <input type="search" className="w-96 focus:outline-none" placeholder="Search..." />
        </div>
        <div className="flex space-x-10 items-center">
          <div>
            <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div>
            <button className="p-1 px-4 rounded-lg bg-blue-200 focus:outline-none hover:bg-blue-400">
              <div className="flex items-center space-x-2">
                <div className="text-blue-800 font-bold">
                  Admin
                </div>
                <div>
                  <svg className="w-4 h-4 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
