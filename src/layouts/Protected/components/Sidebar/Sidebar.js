import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation()

  return (
    <div className="h-screen w-56 pt-24">
      <div>
        <ul className="space-y-10 px-8">
          <li className={`${location.pathname == '/' && 'bg-blue-200'} hover:bg-blue-50 py-2 px-6 transition duration-400 ease-in rounded-lg`}>
            <Link to="/" className="flex space-x-4 items-center">
              <div>
                <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                Home
            </div>
            </Link>
          </li>

          <li className={`${location.pathname == '/campaigns' && 'bg-blue-200'} hover:bg-blue-50 py-2 px-6 transition duration-400 ease-in rounded-lg`}>
            <Link to="/campaigns" className="flex space-x-4 items-center">
              <div>
                <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                Campaigns
            </div>
            </Link>
          </li>

          <li className={`${location.pathname == '/blogs' && 'bg-blue-200'} hover:bg-blue-50 py-2 px-6 transition duration-400 ease-in rounded-lg`}>
            <Link to="/blogs" className="flex space-x-4 items-center">
              <div>
                <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                Blogs
            </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar