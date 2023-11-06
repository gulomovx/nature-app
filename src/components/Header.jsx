import Navbar from './Navbar'
import bg from '../assets/bg1.jpg'

const Header = () => {
  return (
      <div style={{ 
        background: `url(${bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",  
      }} className='h-screen'>
    <div className="max-w-[1200px] mx-auto">
          <Navbar />
          {/* main content */}
          <div className="flex flex-col text-white   w-[800px] top-[250px] absolute ">
                  <p className='rounded-[50px] p-2 bg-slate-200 w-[400px]'>Lorem ipsum, dolor sit amet consectetur </p>
                  <h1 className='text-5xl mt-8 font-medium '>Experience the <br /> <span className='text-8xl font-bold tracking-wider'>Magic of Bromo</span></h1>
                  <button className="mt-8 px-4 py-2 text-start bg-slate-300 w-[150px] rounded-[50px] font-medium text-slate-800">Explore Now</button>
              </div>
              <div className="flex justify-between relative mt-[-50px]">
                  <div className="flex gap-6">
                      <p className="bg-slate-100 px-8 py-2 rounded-[50px]">Lorem ipsum dolor sit amet.</p>
                      <p className="bg-slate-100 px-8 py-2 rounded-[50px]">Lorem ipsum dolor sit amet.</p>
                      <p className=""></p>
                  </div>    
                  <div className="flex flex-col">
                      
                  </div>
              </div>
    </div> 
          
          
    </div>
  )
}

export default Header