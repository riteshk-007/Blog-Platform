import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const SideNav = () => {
    const menu = [
        {
            id : 1,
            name: 'All Courses',
            icon: BookOpen,
        },
        {
            id : 2,
            name: 'Membership',
            icon: BadgeIcon,
            
        },
        {
            id : 3,
            name: 'Be Instructor',
            icon: GraduationCap,
           
        },
        
    ]
  return (
    <div className="p-5 h-screen bg-gray-100 shadow-sm border">
  <div   className="flex items-center justify-center"> 
  <Image src='/logo.svg' width={150} height={80} alt='logo'/>
  </div>
      {/* menu list  */}
   <hr className="mt-7"/>
        <div className="mt-8">
          {menu.map((item)=>{
            return(
              <div key={item.id} className="group flex gap-3 mt-2 p-3 text-[17px] items-center text-gray-700 cursor-pointer
              hover:bg-primary hover:text-white rounded-md transition duration-300
              ">
              <item.icon className="group-hover:animate-bounce"/>
              <h2>{item.name}</h2> 
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default SideNav
