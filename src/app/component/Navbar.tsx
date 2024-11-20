"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-[48px] flex justify-between md:justify-center items-center text-center mt-[20px] relative">
        <div className="flex pl-[18px] md:p-0">
          
          <Image
            src={"/HamBurgur.png"}
            alt="Hamburger Menu"
            width={22.13}
            height={20.25}
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
          
          <Image
            src={"/SHOP.CO.png"}
            alt="Logo"
            width={160}
            height={22}
            className="ml-[16px] md:mr-[37px]"
          />

          <ul
            className={`${
              isMenuOpen
                ? "flex absolute left-1 top-[50px] h-[321px] w-[30%] justify-around bg-black text-white flex-col"
                : "hidden"
            } sm:text-[12px] md:text-[16px] md:flex md:gap-[15px] md:ml-[40px] md:relative md:bg-transparent md:text-black md:flex-row`}
          >
            <li>
              <Link href={"/"} className="hover:text-gray-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500">
                On Sale
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500">
                Brands
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-end pr-[18px] md:pr-0 md:items-center md:ml-[40px] md:relative">
          {/* Search Icon */}
          <div className="text-black md:absolute md:left-4 md:top-1/2 md:transform md:-translate-y-1/2">
            <Image
              src={"/magnifing.png"}
              alt="Search Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>

          {/* Search Bar */}
          <input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="hidden md:flex sm:w-[300px] md:w-[577px] md:h-[48px] md:pl-[40px] md:pr-[10px] md:rounded-[62px] md:bg-[#F0F0F0] md:text-md md:outline-none"
          />

          {/* Cart and Profile Icons */}
          <Image
            src={"/Frame.png"}
            alt="Cart"
            width={22.13}
            height={20.25}
            className="w-[22.13px] h-[20.25px] ml-[15px] cursor-pointer"
          />
          <Image
            src={"/Vector (1).png"}
            alt="Profile"
            width={22.13}
            height={20.25}
            className="w-[22.13px] h-[20.25px] ml-[15.87px] cursor-pointer "
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
