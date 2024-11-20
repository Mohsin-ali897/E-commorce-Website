import React from 'react'

import ShopCo from "../../../public/SHOP.CO.png"
import emailIcone from "../../../public/emailIcone.png"
import twitter from "../../../public/twiiter.png"
import fb from "../../../public/fb.png"
import insta from "../../../public/insta.png"
import github from "../../../public/github.png"

import visa from "../../../public/visa.png"
import master from "../../../public/master.png"
import paypal from "../../../public/paypal.png"
import applepay from "../../../public/applepay.png"
import gpay from "../../../public/gpay.png"



import Image from 'next/image'

const Footer = () => {
  return (
    <>
     
      <div className='bg-[#F0F0F0] h-[850px] md:h-[499px] md:flex md:mt-[180.42px] flex-col justify-center relative'>
      <div className='absolute top-[-150px] md:top-[-90px] flex flex-col justify-start items-center bg-[#000000] mx-4 h-[293px] w-[358px] rounded-[16px] gap-16 md:flex-row md:h-[180px] md:w-[1060px] md:mx-[100px]'>
        <h1 style={{fontFamily:"integral"}} className='w-[327px] h-[105px] leading-[35px] font-bold text-white text-[28px] pl-[24px] pt-[32px] md:w-[551px] md:h-[94px] md:text-[38px] md:leading-[45px] md:ml-[34px] md:pt-[0px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className='flex flex-col justify-between items-center gap-4'>
        <div className='flex flex-row gap-4 
        justify-start items-center pl-4 w-[311px] h-[42px] rounded-full border-2 
        bg-[#ffffff] md:w-[349px] md:h-[48px] transition-transform duration-200 ease-in transform hover:scale-105'>
        <Image src={emailIcone} alt='email'
         className='w-5 h-5'/>
        <input type="text" placeholder='Enter your email address' />
        </div>
        <button className='flex 
        flex-row gap-4 text-center justify-center font-medium 
        transition-transform duration-200 ease-in transform hover:scale-105
        text-[16px] items-center pl-4 w-[311px] h-[42px] rounded-full border-2 bg-[#ffffff] md:w-[349px] md:h-[48px]'>Subscribe to Newsletter
        </button>
      </div>
      </div>
      <footer className='mt-[200px] md:mt-[50px] flex flex-col  gap-16 pl-[17px] md:flex-row md:justify-center md:px-[100px]'>
            <div className='flex flex-col justify-start mt-[170px] md:mt-0'>
                <Image src={ShopCo} alt='logo'
                 
                className='w-[144px] h-[20px] md:h-[23px] md:w-[167px]'/>
                <p className='w-[357px] h-[40px] mt-[17px] md:mt-[25px] font-normal text-[14px] leading-[20px] opacity-60 md:w-[252px] md:h-[66px] md:text-[14px] md:leading-[22px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex flex-row gap-4 items-center mt-5 md:mt-[35px]'>
                    <Image src={twitter} alt='twitter' className='w-[28px] h-[28px] cursor-pointer transition-transform duration-200 ease-in transform hover:scale-105 '/>
                    <Image src={fb} alt='twitter' className='w-[28px] h-[28px]      cursor-pointer transition-transform duration-200 ease-in transform hover:scale-105 '/>
                    <Image src={insta} alt='twitter' className='w-[28px] h-[28px]   cursor-pointer transition-transform duration-200 ease-in transform hover:scale-105     '/>
                    <Image src={github} alt='twitter' className='w-[28px] h-[28px]  cursor-pointer transition-transform duration-200 ease-in transform hover:scale-105 '/>
                </div>
               </div>

            <div className='grid grid-cols-2 gap-4 justify-between pl-[17px] md:pl[113px] md:flex md:flex-row md:justify-between md:gap-[90px] '>
                <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>COMPANY</h1>
                        <ul className='flex flex-col gap-4 text-[14px] '>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>About</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Fetures</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Works</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Career</li>
                        </ul>
                    </div>

                    <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>HELP</h1>
                        <ul className='flex flex-col gap-4 text-[14px]'>
                        <li  className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105 '>Customer Support</li>
                        <li  className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Fetures</li>
                        <li  className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Works</li>
                        <li  className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Career</li>
                        </ul>
                    </div>

                    <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>FAQ</h1>
                        <ul className='flex flex-col gap-4 text-[14px]'>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Account</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Manage Deliveries</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Orders</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Payment</li>
                        </ul>
                    </div>

                    <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>RESOURCES</h1>
                        <ul className='flex flex-col gap-4 text-[14px]'>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Free eBook</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Development Tutorial</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>How to - Blog</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-transform duration-200 ease-in transform hover:scale-105'>Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
               
        </footer>
        <hr className='mx-[16px] mt-[40px] md:mt-[50px] md:mx-[100px] h-[2px] bg-black opacity-30 flex justify-center'/>
                <div className='flex flex-col gap-4 items-center mt-4 mx-4 md:mx-[100px] md:mt-[25px] md:flex-row justify-between'>
                    <p className='opacity-60'>© 2000-2021, All rights reserved</p>
                    <div className='flex flex-row justify-between md:gap-[12px]'>
                        <Image src={visa} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px] transition-transform duration-200 ease-in transform hover:scale-105'/>
                        <Image src={master} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px] transition-transform duration-200 ease-in transform hover:scale-105'/>
                        <Image src={paypal} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px] transition-transform duration-200 ease-in transform hover:scale-105'/>
                        <Image src={applepay} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px] transition-transform duration-200 ease-in transform hover:scale-105'/>
                        <Image src={gpay} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px]    transition-transform duration-200 ease-in transform hover:scale-105'/>
                    </div>
                </div>
      </div>
      
      

     
    </>
  )
}

export default Footer;