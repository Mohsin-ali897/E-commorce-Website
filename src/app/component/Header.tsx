import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <>
        <div className="bg-black text-white h-[38px] min-w-full sm:w-[100%] flex justify-between items-center px-4 md:px-8 font-mono text-[12px] md:text-[14px] ">
  
            <p className="font-satoshi text-center flex-1">
                    Sign up and get 20% off to your first order.{' '}
                <Link href={"/"} className="underline">
                        Sign Up Now
                </Link>
            </p>

  
            <div className="hidden md:flex md:items-center md:cursor-pointer md:pr-[100px]">
                <Image src={"/Vector.png"} alt="icon" width={20} height={20} />
            </div>
        </div>
    </>
  )
}

export default Header