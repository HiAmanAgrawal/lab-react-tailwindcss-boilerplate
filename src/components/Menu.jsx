import React from 'react'

function Menu() {
  return (
    <div className='flex flex-row p-4 shadow-xl w-4/12 mx-auto'>
      <div className="logo m-2">
        <img src="src\assets\Kalvium-Logo-SVG.svg" alt="kalvium_logo" width="200px" />
      </div>
      <div className="description m-2">
        <h6 className='font-bold'>Kalvium Store</h6>
        <p className='text-slate-800'>You have a new course!</p>
      </div>
    </div>
  )
}

export default Menu
