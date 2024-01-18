const Signup = ({setShow, show}) => {
  return (
 <div className="dark:bg-black bg-white">
       <div className="flex flex-col  dark:text-gray-300 text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
      Sign Up
    </h4>
    <p className="block mt-1 font-sans text-base font-normal leading-relaxed dark:text-gray-300 text-gray-700">
      Nice to meet you! Enter your details to register.
    </p>
    <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
      <div className="flex flex-col gap-6 mb-1">
        <h6
          className="block -mb-3 font-sans text-base font-semibold  text-blue-gray-900">
          Your Name
        </h6>
        <div className="h-11 w-full min-w-[200px]">
          <input placeholder="name"
          type="text"
            className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
          
        </div>
        <h6
          className="block -mb-3 font-sans text-base font-semibold  text-blue-gray-900">
          Your Email
        </h6>
        <div className="h-11 w-full min-w-[200px]">
          <input placeholder="name@mail.com"
          type="email"
            className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
        </div>
        <h6
          className="block -mb-3 font-sans text-base font-semibold  text-blue-gray-900">
          Password
        </h6>
        <div className="h-11 w-full min-w-[200px]">
          <input type="password" placeholder="********"
            className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
        </div>
      </div>
      <button
        className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        sign up
      </button>
      <div className="block mt-4 font-sans text-base font-normal leading-relaxed text-center dark:text-gray-300 text-gray-700">
    Already have an account?
    <span 
        onClick={() => setShow(!show)}
     className="font-medium text-gray-900 dark:text-gray-500 cursor-pointer">
     {" "} Login
    </span>
  </div>
    </form>
  </div>
 </div>  

  )
}

export default Signup
