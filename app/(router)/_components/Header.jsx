import { BellDot, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className='p-4 bg-gray-100 dark:bg-black flex md:justify-between md:w-full '>
        {/* search bar */}
      <div className='flex gap-2 border p-2 rounded-md md:w-full'>
        <Search className='h-5 w-5'/>
        <input type="search" placeholder="Search..." className="border-none bg-transparent outline-none w-full"/>
      </div>
      {/* get started button & bell icon */}

      <div className='flex items-center gap-4 mx-2'>
        <BellDot className='text-gray-500'/>
        <Button variant="default">Get Started</Button>

      </div>
    </div>
  )
}

export default Header