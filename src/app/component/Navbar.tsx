"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react"; // Lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center h-16 w-full py-2 px-7">
        {/* Logo */}
        <div>
          <Image
            src={"/SHOP.CO.png"}
            alt="Logo"
            width={160}
            height={22}
            className="ml-4 md:mr-6 w-24 sm:w-36 md:w-40 "
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5">
          <ul className="flex gap-5 list-none">
            <li>
              <Link
                className="font-medium text-black hover:text-gray-600 transition duration-300 no-underline"
                href="/"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-black hover:text-gray-600 transition duration-300 no-underline"
                href="/shop"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-black hover:text-gray-600 transition duration-300 no-underline"
                href="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Search & Icons */}
        <div className="hidden md:flex items-center gap-7">
          <input
            className="h-9 w-[400px] px-5 border-2 rounded-2xl focus:outline-none focus:border-gray-400"
            type="text"
            placeholder="Search Products"
          />
          <ul className="flex gap-5 list-none">
            <li className="text-[25px] text-black no-underline hover:text-gray-600 transition duration-300">
              <Link href="#">
                <ShoppingCart className="text-black no-underline" />
              </Link>
            </li>
            <li className="text-[25px] text-black no-underline hover:text-gray-600 transition duration-300">
              <Link href="/account">
                <User className="text-black no-underline" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center gap-4 list-none">
            <li>
              <Link
                className="font-medium text-black hover:text-gray-600 transition duration-300 no-underline"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-black hover:text-gray-600 transition duration-300 no-underline"
                href="/shop"
                onClick={() => setIsOpen(false)}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-black hover:text-gray-600 transition duration-300 no-underline"
                href="/contact"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// 'use client'
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart, User } from 'lucide-react'; // Import icons from lucide-react

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="w-full bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src="/SHOP.CO.png"
//             alt="Logo"
//             width={160}
//             height={22}
//             className="ml-2"
//           />
//         </div>

//         {/* Hamburger Menu (for mobile) */}
//         <div className="md:hidden" onClick={handleMenuToggle}>
//           <div className="space-y-1">
//             <div className="w-6 h-0.5 bg-gray-800"></div>
//             <div className="w-6 h-0.5 bg-gray-800"></div>
//             <div className="w-6 h-0.5 bg-gray-800"></div>
//           </div>
//         </div>

//         {/* Navbar Links */}
//         <div className={`md:flex space-x-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <ul className="flex gap-10">
//             <li><Link href="/" className="font-medium text-lg hover:text-gray-600">HOME</Link></li>
//             <li><Link href="/shop" className="font-medium text-lg hover:text-gray-600">SHOP</Link></li>
//             <li><Link href="/contact" className="font-medium text-lg hover:text-gray-600">CONTACT</Link></li>
//           </ul>
//         </div>

//         {/* Search Input and Icons */}
//         <div className="flex items-center gap-6">
//           {/* Search Input */}
//           <input className="h-9 w-[300px] px-5 border-2 rounded-lg" type="text" placeholder="Search Products" />

//           {/* Icons */}
//           <div className="flex gap-6">
//             <Link href="#" className="text-xl">
//               <ShoppingCart />
//             </Link>
//             <Link href="#" className="text-xl">
//               <User />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
