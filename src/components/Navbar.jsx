export default function Navbar() {
    return (
      <>
      <nav className="bg-red-500 flex flex-row justify-between font-bold text-white">
        <div>
          <button className="p-3 m-2 rounded-md">Kalvium</button>
          <button className="p-3 m-2 hover:bg-gray-50 hover:text-black rounded-md">About us</button>
          <button className="p-3 m-2 hover:bg-gray-50 hover:text-black rounded-md">Contact Us</button>
          <button className="p-3 m-2 hover:bg-gray-50 hover:text-black rounded-md">Courses</button>
        </div>
        <button className="p-3 m-2 border-2 border-white hover:bg-gray-50  hover:text-black rounded-md ">Login</button>
      </nav>
      </>
    )
    
  
  }
  