
const Navbar = () => {
  return (
      <div className="  w-full h-screen  ">
          <div className="pt-4 flex justify-between items-center ">
          <div className="">
              <h1 className="text-2xl text-white font-semibold tracking-wider">Wanderlish</h1>
          </div>
          <div className="">
              <ul className="flex gap-6 cursor-pointer text-white text-[17px]">
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Help</li>
              </ul>
          </div>
          <div className="">
              <button className="px-6 py-2 border rounded-[50px] font-medium text-white hover:bg-white hover:text-slate-800">Get Started</button>
          </div>
          </div>
    </div>
  )
}

export default Navbar