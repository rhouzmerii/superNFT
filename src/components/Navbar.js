import React from "react"
import logo from "../assets/Logo.png"
import menu from "../assets/menu.svg"
import { navLinks } from "../data/data"
import { RiSearchLine } from "react-icons/ri"
import { HiOutlineUpload } from "react-icons/hi"
import { IconContext } from "react-icons/lib/esm/iconContext"

function Navbar() {
  return (
    <div>
      <div className='relative flex justify-between items-center px-4 sm:px-20 py-5'>
        <div className='gradient-01 absolute  w-[20%] inset-0 z-[10]' />
       
        <div className='flex items-center '>
          <img src={logo} alt='' />
          <h4 className='text-3xl font-semibold text-white font-kanit'>
            NFT<span className='text-primary text-2xl font-extrabold ml-1 '>core</span>{" "}
          </h4>
        </div>
       
        
          <ul className='hidden sm:flex items-center text-white gap-[40px]'>
            {navLinks.map((items) => {
              return (
                <li key={items.id}>
                  <h4 className='text-[14px] font-inter'>{items.title}</h4>
                </li>
              )
            })}
          </ul>
        
        <div className='hidden sm:flex items-center gap-[20px]'>
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <RiSearchLine />

            <button className='px-[12px] py-[8px] rounded-[30px] flex justify-center items-center border border-[#15BFFD] text-primary'>
              Connect Wallet
            </button>
            <div className='w-[45px] h-[45px] flex justify-center items-center bg-primary rounded-full'>
              <HiOutlineUpload />
            </div>
           
          </IconContext.Provider>
        </div>
         <div className="flex sm:hidden flex justify-end">
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
