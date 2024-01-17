import AllBlogs from "./_components/AllBlogs"
import WelcomeBanner from "./_components/WelcomeBanner"


const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5">
    {/* left container */}
     <div className="col-span-2">
     <WelcomeBanner/>
     <AllBlogs/>
     </div>
       {/* right container */}
     <div>
     
     </div>
    </div>
  )
}

export default Home
