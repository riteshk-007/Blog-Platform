"use client";
import { AlignRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { ModeToggle } from "@/components/themeToggle";
import { showPost } from "@/app/redux/PostSlice";
import Link from "next/link";
import Searchitem from "./Searchitem";

const Header = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.entity);

  return (
    <div className="p-4 bg-gray-100 dark:bg-black flex md:justify-between md:w-full ">
      {/* search bar */}
      <div className="flex gap-2 border p-2 rounded-md md:w-full">
        <Searchitem />
      </div>
      {/* get started button & bell icon */}

      <div className="flex items-center gap-4 mx-2">
        {user && user?.data ? (
          <Button onClick={() => dispatch(showPost())} variant="default">
            POST
          </Button>
        ) : (
          <Button variant="default">
            <Link href="/signup">Login</Link>
          </Button>
        )}
        <span className="w-full flex items-center justify-start gap-5 text-gray-700 dark:text-gray-100 cursor-pointer">
          <ModeToggle />
        </span>
        <div className="flex md:hidden z-50">
          <button
            className={` dark:bg-gray-900 bg-white rounded-md p-[5px] shadow-md ${
              show ? "md:hidden" : ""
            }`}
            onClick={() => setShow(!show)}
          >
            <AlignRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
