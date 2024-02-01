"use client";
import { getUser, logoutUser } from "@/app/redux/UserSignupLoginSlice";
import {
  BadgeIcon,
  BookOpen,
  GraduationCap,
  LogIn,
  LogOut,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

const SideNav = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const router = useRouter();
  const user = useSelector((state) => state.user.entity);
  useLayoutEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const menu = [
    {
      id: 1,
      name: "All Blogs",
      icon: BookOpen,
      url: "/home",
      action: () => setShow(!show),
    },
    user && user?.data
      ? {
          id: 2,
          name: "My Blogs",
          icon: BadgeIcon,
          url: "/myblog",
          action: () => setShow(!show),
        }
      : null,
    {
      id: 3,
      name: "About Us",
      icon: GraduationCap,
      url: "/home",
      action: () => setShow(!show),
    },
    user && user?.data
      ? {
          id: 4,
          name: "Logout",
          icon: LogOut,
          url: "/home",
          action: () => {
            dispatch(logoutUser());
            router.refresh();
            setShow(!show);
            toast({
              title: "Logged out",
              description: "You have been logged out successfully",
              variant: "default",
            });
          },
        }
      : {
          id: 4,
          name: "Login",
          icon: LogIn,
          url: "/signup",
          action: () => setShow(!show),
        },
  ].filter(Boolean);

  return (
    <>
      <div
        className={`dark:bg-black sm:w-64 fixed top-0    z-[100] p-5 h-screen  bg-gray-100 shadow-sm border transition-all duration-500 ease-in-out transform ${
          show ? "translate-x-0" : "-translate-x-full md:translate-x-0 "
        }`}
      >
        <button
          className={` flex md:hidden z-50 dark:bg-gray-900 fixed right-4 top-4 bg-white rounded-md p-[5px] shadow-md ${
            show ? "md:hidden" : ""
          }`}
          onClick={() => setShow(!show)}
        >
          <X />
        </button>
        <Link href={"/home"} className="flex items-center justify-center">
          <Image src="/logo.svg" width={150} height={80} alt="logo" />
        </Link>
        {/* menu list  */}
        <hr className="mt-7" />
        <div className="mt-8">
          {menu?.map((item) => {
            return (
              <button onClick={item.action} key={item.id} className="w-full">
                <Link
                  key={item.id}
                  href={item.url}
                  className="group flex gap-3 mt-2 p-3 text-[17px] items-center text-gray-700 dark:text-gray-100 cursor-pointer
              hover:bg-primary hover:text-white dark:hover:text-black rounded-md transition duration-300
              "
                >
                  <item.icon className="group-hover:animate-bounce" />
                  <h2>{item.name}</h2>
                </Link>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNav;
