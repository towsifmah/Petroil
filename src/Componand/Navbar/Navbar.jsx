import { useState } from "react"
import {GoSidebarExpand} from 'react-icons/go'
import {IoMdClose} from 'react-icons/io'



const Navbar = () => {
    const [show , setshow] = useState(false)
    const barclick =()=>{
        setshow(!show)
    }
  return (
    <div className="bg-Primary ">
     <div className="container">
      <nav className="flex items-center justify-between">
        <div className="">
            <img src="./src/assets/logo.svg" alt="logo" />
        </div>
       <div className="flex">
       <div onClick={barclick} className="md:hidden text-[30px] font-semibold text-white ">
            {
                show === true ? <IoMdClose/> : <GoSidebarExpand/>
            }
        </div>
        <div className={`overflow-hidden items-center md:static absolute  left-0 bg-Primary/50 backdrop-blur w-full  duration-500 text-center ${show ? 'top-[136px]' : 'top-[-248px]'}`}>
        <ul className=" py-10 flex md:flex-row flex-col items-center text-white lg:gap-x-[47px] sm:gap-x-[26px]  mb-[-3%] sm:mb-0">
            <li><a href="" className="font-popping text-base md:text-[13px] sm:text-[11px] lg:text-[15px] font-semibold">Home</a></li>
            <li><a href="" className="font-popping text-base md:text-[13px] sm:text-[11px] lg:text-[15px] font-semibold">About</a></li>
            <li><a href="" className="font-popping text-base md:text-[13px] sm:text-[11px] lg:text-[15px] font-semibold">Service</a></li>
            <li><a href="" className="font-popping text-base md:text-[13px] sm:text-[11px] lg:text-[15px] font-semibold">Gallery</a></li>
            <li><a href="" className="font-popping text-base md:text-[13px] sm:text-[11px] lg:text-[15px] font-semibold">Blog</a></li>
            <div className="lg:pl-[25px] mt-[3%] sm:mt-0">
            <a href="" className="font-popping text-base md:text-[14px] sm:text-[12px] font-semibold border-2 text-white  py-[8px] lg:py-[14px] sm:py-[6px] px-[22px] lg:px-[32px] sm:px-[16px]">CONTACT</a>
            </div>
        </ul> 
        </div>
       </div>
      </nav>
     </div>
    </div>
  )
}

export default Navbar