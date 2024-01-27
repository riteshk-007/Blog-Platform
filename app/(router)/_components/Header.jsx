"use client";
import { AlignRight, BellDot, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { ModeToggle } from "@/components/themeToggle";

const Header = ({ show, setShow }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-gray-100 dark:bg-black flex md:justify-between md:w-full ">
      {/* search bar */}
      <div className="flex gap-2 border p-2 rounded-md md:w-full">
        <Search className="h-5 w-5" />
        <input
          type="search"
          placeholder="Search..."
          className="border-none bg-transparent outline-none w-full"
        />
      </div>
      {/* get started button & bell icon */}

      <div className="flex items-center gap-4 mx-2">
        <Button
          onClick={() => dispatch({ type: "post/showPost" })}
          variant="default"
        >
          POST
        </Button>
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
