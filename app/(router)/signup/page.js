"use client";
import { useState } from "react";
import Login from "../_components/Login";
import Signup from "../_components/Signup";

const LoginSignUp = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="dark:bg-black bg-white flex items-center justify-center p-5  w-full h-screen">
      {!show ? (
        <Login setShow={setShow} show={show} />
      ) : (
        <Signup setShow={setShow} show={show} />
      )}
    </div>
  );
};

export default LoginSignUp;
