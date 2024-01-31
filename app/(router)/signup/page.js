"use client";
import Login from "../_components/Login";
import Signup from "../_components/Signup";
import { useSelector } from "react-redux";

const LoginSignUp = () => {
  const show = useSelector((state) => state.user.show);
  return (
    <div className="dark:bg-black bg-white flex items-center justify-center p-5  w-full h-screen">
      {!show ? <Login /> : <Signup />}
    </div>
  );
};

export default LoginSignUp;
