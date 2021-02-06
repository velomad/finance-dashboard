import React from "react";
import { Navbar, Sidebar } from "./components";

const Protected = (props) => {
  return (
    <div>
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="flex flex-wrap">
        <div className="">
          <Sidebar />
        </div>
        <div className="md:w-4/5 mt-16 p-2 flex-none bg-gray-50" style={{ borderRadius: "2rem" }} >{props.children}</div>
      </div>

    </div>
  );
};

export default Protected;
