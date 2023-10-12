import React, { useState } from 'react'
import logo from '../images/logo.png';
import {RiMenu3Fill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  let links =[
    {name: 'HOME', link: '/'},
    {name: 'ABOUT US', link: '/'},
    {name: 'SERVICES', link: '/'},
    {name: 'BLOG', link: '/'},
    {name: 'CONTACT US', link: '/'},
  ]

    let [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <>
      <div className='shadow-md w-full'>
        <div className='md:flex md:justify-between md:items-center'>
          <div className='flex gap-4 items-center md:px-10 px-4 my-4 pb-2'>
            <img src={logo} alt='logo' className='w-8 h-6' />
            <h3 className='text-2xl'>tailwindcss</h3>
          </div>
          
            <div onClick={()=> setisMenuOpen(!isMenuOpen)} className='md:hidden text-2xl absolute top-4 right-4 cursor-pointer'>
              {
                isMenuOpen ? <AiOutlineClose/> : <RiMenu3Fill/>
              }
              
              </div>
            
            <ul className={`md:flex md:items-center pb-6 md:pb-0 pl-9 md:pl-0 px-5 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${isMenuOpen ? 'top-15' : 'top-[-490px]'}`}>
              {
                links.map(link => <li className='font-semibold my-4 md:my-0 md:ml-8'><a href="/" className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a></li>)
              }
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar