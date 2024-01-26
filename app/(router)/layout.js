import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import Editor from "./_components/Editor";

const layout = ({ children }) => {
  return (
    <div>
      <div className="sm:w-64  sm:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        <div>
          <Editor />
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
