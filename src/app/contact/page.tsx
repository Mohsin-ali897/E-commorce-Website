import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import Footer from '../component/Footer'
import ruby from "../../../public/Ruby Diamond.png"
// import cartImg from 
import { IoTimeSharp } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
export default function Contact() {
  return (
    <div>
        
        <Header/>
        <Navbar/>
        <div>
        <div className="flex flex-col px-4 sm:px-8 lg:px-16">
  {/* Header Section */}
  <div className="flex justify-center items-center flex-col text-center my-8 bg-black py-10">
    <h1 className="font-semibold text-[30px] leading-[30px] text-white">
      Get In Touch With Us
    </h1>
    <p className=" font-normal max-w-[700px] mt-4 text-white">
      For more information about our product & services, please feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
    </p>
  </div>

  {/* Content Section */}
  <div className="flex flex-col justify-around lg:flex-row gap-8 py-[50px] lg:py-[100px]">
    {/* Contact Information */}
    <div className="flex flex-col space-y-6 w-full lg:w-1/2">
      {/* Address */}
      <div className="flex items-start">
        <FaLocationDot className="text-xl mt-1 mr-4 text-black" />
        <div>
          <h4 className="font-semibold">Address</h4>
          <p className="text-sm text-[#6b6b6b]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start">
        <FaPhoneAlt className="text-xl mt-1 mr-4 text-black" />
        <div>
          <h4 className="font-semibold">Phone</h4>
          <p className="text-sm text-[#6b6b6b]">
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>

      {/* Working Time */}
      <div className="flex items-start">
        <IoTimeSharp className="text-xl mt-1 mr-4 text-black" />
        <div>
          <h4 className="font-semibold">Working Time</h4>
          <p className="text-sm text-[#6b6b6b]">
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="w-full lg:w-1/2 flex flex-col space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="text-sm block mb-2">
          Your name
        </label>
        <input
          type="text"
          id="name"
          className="h-12 w-full border border-[#9F9F9F] rounded-[10px] px-4"
          placeholder="Enter your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-sm block mb-2">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="h-12 w-full border border-[#9F9F9F] rounded-[10px] px-4"
          placeholder="Enter your email"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="text-sm block mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="h-12 w-full border border-[#9F9F9F] rounded-[10px] px-4"
          placeholder="Enter the subject"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="text-sm block mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="h-24 w-full border border-[#9F9F9F] rounded-[10px] px-4"
          placeholder="Write your message here"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-start">
        <button className="h-12 px-12 w-screen xs:w-[180px] font-medium text-black bg-white  border-2 border-black rounded-[10px] hover:bg-gray-800 hover:text-white transition-all">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
        <Footer/>
    </div>
  )
}
