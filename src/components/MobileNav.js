import React,{useState} from 'react'


import {IoMdClose} from "react-icons/io"
import {CgMenuRight} from "react-icons/cg"

import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const menuVariant ={
  hidden:{
    x:"100%"
  },
  show:{
   x: 0,
  transition:{
    ease:[0.6,0.01,-0.05,0.9],
  },
  }
}


const MobileNav = () => {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <nav className='text-primary xl:hidden'>
      <div onClick={()=>setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      <motion.div 
      variants={menuVariant}
      initial="hidden"
      animate={openMenu ? "show" : ""}
      className='bg-white shadow-2xl absolute w-full top-0 right-0 max-w-xs h-screen z-20'>
        <div onClick={()=>setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className='h-full flex flex-col items-center justify-center gap-y-8 text-primary text-3xl font-bold'>
          <li><Link to={"/"}>خانه</Link></li>
          <li><Link to={"/about"}>درباره ما</Link></li>
          <li><Link to={"/portfolio"}>نمونه کارها</Link></li>
          <li><Link to={"/contact"}>تماس با ما</Link></li>
        </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav