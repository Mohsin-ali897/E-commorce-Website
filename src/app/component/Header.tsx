
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs";
function Header() {
  return (
    <>
      <div className="bg-black h-10 text-white w-full flex justify-between items-center px-4 sm:px-6 md:px-8 py-1 font-mono text-[12px] sm:text-[14px] md:text-[16px]">
        <p className="font-satoshi text-center flex-1 text-[10px] sm:text-[12px] md:text-[14px]">
          Sign up and get 20% off your first order.{' '}
          <Link href={"/"} className="underline">
            Sign Up Now
          </Link>
        </p>

        {/* Icon visibility based on screen size */}
        <div className="hidden md:flex md:items-center md:cursor-pointer md:pr-[40px]">
          <BsTwitterX className='text-white '/>
        </div>
      </div>
    </>
  )
}

export default Header
