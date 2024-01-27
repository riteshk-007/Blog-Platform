"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import Editor from "./_components/Editor";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <SideNav show={show} setShow={setShow} />
      </div>
      <div className="md:ml-64 z-20">
        <Header show={show} setShow={setShow} />
        <div>
          <Editor />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
