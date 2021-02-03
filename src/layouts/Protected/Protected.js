import React from "react";
import { Sidebar } from "./components";

const Protected = (props) => {
  return (
    <div>
      <div className="pb-14">
        <Sidebar />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Protected;
