"use client"
import { ModeToggle } from "@/components/themeToggle"
import { AlignRight, BadgeIcon, BookOpen, GraduationCap, LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const SideNav = () => {
  const [show, setShow] = useState(false)
    const menu = [
        {
            id : 1,
            name: 'All Blogs',
            icon: BookOpen,
            url: '/home'
        },
        {
            id : 2,
            name: 'My Blogs',
            icon: BadgeIcon,
            url: '/myblog'
            
        },
        {
            id : 3,
            name: 'About Us',
            icon: GraduationCap, 
            url: '/home'
        },
        {
          id : 4,
          name: 'Login',
          icon: LogIn,
          url: '/home'
        }
        
    ]
  return (
  <>
  <button className={`fixed md:hidden  top-0 right-0 m-4 bg-white rounded-full p-2 shadow-lg ${show ? 'md:hidden' : ''}`} onClick={() => setShow(!show)}>
   <AlignRight/>
  </button>
      <div className={`p-5 h-screen z-50 bg-gray-100 shadow-sm border transition-all duration-500 ease-in-out transform ${show ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
  <Link href={"/home"}   className="flex items-center justify-center"> 
  <Image src='/logo.svg' width={150} height={80} alt='logo'/>
  </Link>
      {/* menu list  */}
   <hr className="mt-7"/>
        <div className="mt-8">
          {menu.map((item)=>{
            return(
              <Link href={item.url} key={item.id} className="group flex gap-3 mt-2 p-3 text-[17px] items-center text-gray-700 cursor-pointer
              hover:bg-primary hover:text-white rounded-md transition duration-300
              ">
              <item.icon className="group-hover:animate-bounce"/>
              <h2>{item.name}</h2> 
              </Link>
            )
          })}
        </div>

        <div className="w-full h-4/6 border-4 flex items-end justify-end">
          <ModeToggle/>
        </div>
    </div>
  </>
  )
}

export default SideNav
