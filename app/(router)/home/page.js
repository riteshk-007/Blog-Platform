import WelcomeBanner from "./_components/WelcomeBanner"


const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5">
    {/* left container */}
     <div className="col-span-2">
     <WelcomeBanner/>
     </div>
       {/* right container */}
     <div>
      right container
     </div>
    </div>
  )
}

export default Courses
